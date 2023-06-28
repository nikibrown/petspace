import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

html, body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  max-width: 80vw;
  
}

header {
  background-color: #2E89FF;
  color: #fff;
  padding: 20px 0;
}

header h1 {
  color: #fff;
  margin: 0;
}

.avatar {
  position: relative;
}

.avatar:hover {
  cursor: pointer;
}

.badge {
  display: block;
  background-color: #CE4141;
  border-radius: 50%;
  line-height: .5;
  font-size: 12px;
  padding: 10px;
  width: 4px;
  height: 4px;
  text-align: center;

  position: absolute;
  top: -6px;
  right: -15px;

}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

footer a {
    color: #fff;
  text-decoration: none;
  transition: color .15s ease-in-out;
}

footer a:hover {
  color: #E9E8E8;
}

header a {
  color: #fff;
  text-decoration: none;
  transition: color .15s ease-in-out;
}

header a:hover {
  color: #E9E8E8;
}

.header-content, 
.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

main {
  padding: 50px 0;
}

footer p {
  margin: 0;
}

`