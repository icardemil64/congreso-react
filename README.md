# Congreso REACT 🗳️

Sistema diseñado que permite visualizar datos sobre la composición del congreso utilizando como medio archivos CSV.

## Modelo CSV 📄

Las tres primeras columnas son obligatorias, desde la cuarta se pueden agregar todas las que quieras. Archivo de ejemplo en [este enlace](https://github.com/icardemil64/congreso-react/blob/master/src/assets/Datos.csv) 🔗

| columna                        | ejemplo   |
| ------------------------------ | --------- |
| id (único)                     | {0...155} |
| color (en inglés o código HEX) | red       |
| pacto                          | AD        |
| otro (ejemplo: nombre)         | Pedrito   |

## Sistema 🐱‍🐉

### Dependencias

- Styled-Components
- Papaparse
- Wouter

#### Instalación

```javascript
npm install
```

#### Recursos

- [Open Peeps](https://www.openpeeps.com/)

## Demo 🐱‍💻

[Congress Builder](https://eloquent-turing-bf1604.netlify.app/)
