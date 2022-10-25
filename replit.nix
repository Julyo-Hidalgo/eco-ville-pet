{ pkgs }: {
  deps = [
    pkgs.vimHugeX
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}