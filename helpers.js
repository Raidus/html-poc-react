export const getBodyElement = htmlString => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, 'text/html');
  return html.documentElement.querySelector('body');
};

export const buildScriptWithFn = func => {
  const script = document.createElement('script');
  script.type = 'text/javascript'
  script.text = `var ${func.name} = ${func}`
  return script;
};

