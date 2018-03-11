import Framer from './framer'

# overwrites TextLayer.defaultFont which yeild 'Type Error: Framer.Device is undefined'

TextLayer::defaultFont = () -> """
    -apple-system,
    system-ui,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Helvetica Neue", Arial, sans-serif !default;
"""