# xbar

Simple [Übersicht](https://github.com/felixhageloh/uebersicht) widget status bar with [yabai](https://github.com/koekeishiya/yabai) support.

Originally forked from <https://github.com/kkga/nibar>

## Features

- Show workspace number & current space (one display)
- OnClick switch spaces (interaction shortcut must be enabled)
- Show current app name & title
- Date and time

## Screenshot

![img](./desktop.png)

## Installation

Clone this repo to your Übersicht widgets directory.

```bash
git clone https://github.com/xseman/xbar $HOME/Library/Application\ Support/Übersicht/widgets/xbar
```

## Dependencies

- [SF Fonts](https://developer.apple.com/fonts/) (optional) — used for symbols in the statusbar widget
- [jq](https://github.com/stedolan/jq) — used for parsing json output and displaying the workspaces widget
  - install with homebrew: `brew install jq`

## Refreshing widgets with yabai

Wigets `titlebar.jsx` and `spaces.jsx` aren't refreshing automatically (performance reasons).

To refresh them, you can add these lines utilizing
[yabai's signals]([https://link](https://github.com/koekeishiya/yabai/wiki/Commands#automation-with-rules-and-signals))
at the end of `.yabairc`:

```sh
# spaces
yabai -m signal \
    --add event=space_changed \
    action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"xbar-spaces-jsx\"'"

# title-bar
yabai -m signal \
    --add event=application_front_switched \
    action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"xbar-titlebar-jsx\"'"

# title-bar
yabai -m signal \
    --add event=window_title_changed \
    action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"xbar-titlebar-jsx\"'"
```
