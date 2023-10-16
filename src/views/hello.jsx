BaseHtml = ({ children }) => {
return(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>JSX TO HTML ?</title>
</head>
${children}
`)};

module.exports = BaseHtml;