// This is required to use css modules with typescript. To use scss, copy paste this
// and change the css to scss
declare module "*.css" {
    const content: { [className: string]: string };
    export = content;
}

// For some reason vscode does not recognise react-helmet package
declare module "react-helmet";
