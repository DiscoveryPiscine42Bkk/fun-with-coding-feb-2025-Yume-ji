if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

for x in "$@"; then
    a = "ex$x"
    mkdir -p "$a"
done