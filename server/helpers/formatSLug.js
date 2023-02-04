const formatSlug = (name) => {
    return name.split(" ").join("-");
}

module.exports = formatSlug