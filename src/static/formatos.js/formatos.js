
/* FORMATO DEL TELEFONO */
function formatPhone(phone) {
    phone = phone.replace(/[^\d]/g, "");
    if(phone.length < 10 || phone.length > 10) {
        errors.push({text: 'El numero de telefono debe ser de 10 digitos'});
    }else{
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    };
};

/* FORMATO DE LA CEDULA */
function formatCedula(cedula) {
    cedula = cedula.replace(/[^\d]/g, "");
    return cedula.replace(/(.)(?=(\d{3})+$)/g,'$1,');
};


/* FORMATO DEL NIT */

