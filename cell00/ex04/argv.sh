if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

count=0
for x in "$@"; do
    if [ $count -ge 3 ]; then
        break
    fi
    echo $x
    count=$((count + 1))
    done
