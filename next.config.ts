import type { NextConfig } from "next";

const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName !== "" &&
  !repoName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProjectPage ? `/${repoName}` : "",
  assetPrefix: isProjectPage ? `/${repoName}/` : "",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
