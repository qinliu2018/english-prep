# -*- coding: utf-8 -*-
"""
deploy.py —— 把本项目发布到 GitHub Pages
用法：在项目目录运行  python deploy.py
说明：国内网络下 git push 直连 github.com 经常失败，本脚本改走 api.github.com
     （通常可达）用 GitHub 文件 API 逐个上传/更新文件，效果与 git push 相同。
凭据：自动使用 Windows 凭据管理器里保存的 GitHub 令牌（git push 用过的那份）。
"""
import base64
import json
import subprocess
import sys
import urllib.error
import urllib.request

REPO = 'qinliu2018/english-prep'
SITE = 'https://qinliu2018.github.io/english-prep/'
API = 'https://api.github.com'
# 需要发布的文件（网页运行所需 + 说明文档）
FILES = ['index.html', 'app.js', 'data.js', 'vocab.js', 'sw.js', 'manifest.json', 'README.md',
         'icon-180.png', 'icon-192.png', 'icon-512.png']

TOKEN = None


def get_token():
    global TOKEN
    if TOKEN:
        return TOKEN
    out = subprocess.run(
        ['git', 'credential', 'fill'],
        input=b'protocol=https\nhost=github.com\n\n',
        capture_output=True,
    ).stdout.decode('utf-8', 'ignore')
    for line in out.splitlines():
        if line.startswith('password='):
            TOKEN = line.split('=', 1)[1]
            return TOKEN
    sys.exit('未找到 GitHub 凭据：请先用 git push 成功一次，或运行 gh auth login')


def api(path, data=None, method=None):
    req = urllib.request.Request(
        API + path,
        method=method or ('POST' if data is not None else 'GET'),
    )
    req.add_header('Authorization', 'token ' + get_token())
    req.add_header('Accept', 'application/vnd.github+json')
    req.add_header('User-Agent', 'english-prep-deploy')
    body = None
    if data is not None:
        body = json.dumps(data).encode('utf-8')
        req.add_header('Content-Type', 'application/json; charset=utf-8')
    with urllib.request.urlopen(req, body, timeout=30) as r:
        txt = r.read()
        return r.status, (json.loads(txt) if txt else None)


def upload(path, msg):
    """上传或更新单个文件（contents API，空仓库也可用）"""
    with open(path, 'rb') as fh:
        content = base64.b64encode(fh.read()).decode('ascii')
    payload = {'message': msg, 'content': content}
    try:
        st, cur = api('/repos/%s/contents/%s' % (REPO, path))
        payload['sha'] = cur['sha']  # 更新已有文件必须带 sha
    except urllib.error.HTTPError as e:
        if e.code != 404:
            raise
    st, res = api('/repos/%s/contents/%s' % (REPO, path), payload, method='PUT')
    action = '更新' if 'sha' in payload else '新建'
    print('%s %s -> commit %s' % (action, path, res['commit']['sha'][:10]))


def main():
    for f in FILES:
        upload(f, '发布 ' + f)
    print('全部完成，稍等 1-2 分钟生效 →', SITE)


if __name__ == '__main__':
    main()
