
=== vite-pwa ===
# https://github.com/vite-pwa/vite-plugin-pwa/blob/HEAD/src/types.ts

=== react naming convention ===
Use camelCase for variables, functions, methods, and properties, instances, file names

Use PascalCase for classes , constructors and component names


=== git commands === 
-- delete remote branch 
git push origin -d main

-- wipe out git remote history
mkdir empty_repo; cd empty_repo
git init
git remote add origin <remote_url>
git push --mirror origin


-- delete only some old commit 
git clone <remote_url>
cd <repo_name>
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch <file>" HEAD
git push -f origin master


-- reduce git size by shadow clone
git clone --shallow-since=2020-01-01 <remote_url>
cd <repo_name>
git push origin master



git remote add origin https://github.com/tz182736/dps2n3-cl.git

git push -f origin master