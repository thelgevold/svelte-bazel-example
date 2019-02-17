workspace(name = "svelte_bazel_example")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_sass",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.11.0.zip",
    strip_prefix = "rules_sass-1.11.0",
    sha256 = "dbe9fb97d5a7833b2a733eebc78c9c1e3880f676ac8af16e58ccf2139cbcad03",
)

http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.18.6/rules_nodejs-0.18.6.tar.gz"],
    sha256 = "1416d03823fed624b49a0abbd9979f7c63bbedfd37890ddecedd2fe25cccebc6",
)

http_archive(
    name = "build_bazel_rules_svelte",
    url = "https://github.com/thelgevold/rules_svelte/archive/0.1.zip",
    strip_prefix = "rules_svelte-0.1",
    sha256 = "700a19d6d503500bd8dc190d7e29588c16867c2e163d7c8a883879ff602ef527"
) 

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")
node_repositories()

yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)

load("@build_bazel_rules_svelte//:defs.bzl", "rules_svelte_dependencies")
rules_svelte_dependencies()

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")
sass_repositories()