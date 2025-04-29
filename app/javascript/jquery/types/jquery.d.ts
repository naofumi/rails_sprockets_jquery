type JQueryTooltipPlugin = {
  tooltipEs(): JQuery<HTMLElement>;
}

declare global {
  interface JQuery<TElement = HTMLElement> extends JQueryTooltipPlugin {}
}

export {}

