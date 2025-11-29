# Generate ssh public key
ssh-keygen -t rsa -b 4096 -C  "aashishmaharjan2001@gmail.com"

# Rename branch
git branch -m main

# Rename branch, different branch
git branch -m master main

# Push the new branch to remote
git push -u origin main

# Remove the remote branch
git push origin --delete master

# Pull unrelated histories
git pull --allow-unrelated-histories