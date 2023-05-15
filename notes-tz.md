Use camelCase for variables, functions, methods, and properties, instances, file names

Use PascalCase for classes , constructors and component names

-- wipe out git remote
mkdir empty_repo; cd empty_repo
git init
git remote add origin <remote_url>
git push --mirror origin


-- delete only some old commit 
git clone <remote_url>
cd <repo_name>
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch <file>" HEAD
git push -f origin master


git remote add origin https://github.com/tz182736/dps2n3-cl.git

git push -f origin master