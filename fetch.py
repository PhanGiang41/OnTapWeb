import urllib.request

url = 'https://stu-nghia.info/on-trac-nghiem-html-css-cb'
try:
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        print(f"Success! Length: {len(html)}")
        with open('raw.html', 'w', encoding='utf-8') as f:
            f.write(html)
except Exception as e:
    print(f"Error: {e}")
