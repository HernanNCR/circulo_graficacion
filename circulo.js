document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    document.getElementById('coordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const x1 = parseInt(document.getElementById('x').value);
        const y1 = parseInt(document.getElementById('y').value);
        const radio = parseInt(document.getElementById('radio').value);

        drawPoint(x1, y1, radio);
    });

    function drawPoint(x, y, radio) {
        // Limpiar el lienzo
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Cambiar la escala
        const scaleX = 15;
        const scaleY = 15;
    
        ctx.fillStyle = 'rgb(255, 0, 0)'; // Color rojo para el punto
    
        // Ajustar las coordenadas para que el punto sea el centro del círculo
        const circleX = x * scaleX;
        const circleY = canvas.height - (y * scaleY);
    
        // Calcular el tamaño del radio en unidades de escala
        const radioInUnits = radio * scaleX;
    
        // Dibujar el círculo
        ctx.beginPath();
        ctx.arc(circleX, circleY, radioInUnits, 0, 2 * Math.PI);
        ctx.fill();

        // Dibujar ejes x e y
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - y * scaleY);
        ctx.lineTo(canvas.width, canvas.height - y * scaleY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x * scaleX, 0);
        ctx.lineTo(x * scaleX, canvas.height);
        ctx.stroke();
    }
});


function cerrar(){
    window.location.href = "";
}