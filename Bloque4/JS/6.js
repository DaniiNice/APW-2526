function pantalla() {
    let ancho = screen.width;
    let alto = screen.height / 2;
    let ventana = open('', '', 'width=' + ancho + ', height=' + alto);
    ventana.document.write('<h1>Dividida correctamente</h1>');
}
