# cname.sh

#!/usr/bin/env sh

set -e

echo 'blog.amm.plus' > docs/.vuepress/dist/CNAME

git push -f git@github.com:AmmGo/AmmGo.github.io.git master