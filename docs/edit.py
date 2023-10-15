import re

def mod(text):
    text = re.sub(r'\[\[([^\]]+)\]\]', r'<DocLink to="\1"/>', text)
    text = "\nimport DocLink from '@site/src/components/DocLink'\n\n" + text
    tags = re.findall(r'#[A-Za-z\-\_]+', text)
    text = re.sub(r'#[A-Za-z\-\_]+', '', text)
    text = f"---\ntags: {tags}\n---\n{text}"

    return text

#traverse the directory and find all the markdown files
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".md"):
            with open(os.path.join(root, file), "r+") as f:
                text = f.read()
                f.seek(0)
                f.write(mod(text))
                f.truncate()