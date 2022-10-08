{ pkgs }: {
  deps = [
    pkgs.rclone
    pkgs.fzf
    pkgs.jq.bin
    pkgs.mpv
    pkgs.youtubeDL
    pkgs.ytfzf
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}