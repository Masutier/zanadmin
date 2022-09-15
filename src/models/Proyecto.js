// APLICACION
const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProyectSchema = new Schema ({
    status: { type: String },
    useremail: { type: String, required: true },
    proyname: { type: String, required: true },
    nit: { type: String, default: 'RUT' },
    proynit: { type: String, required: true },
    digit: { type: String, required: true },
    represent: {
        repfirstname: { type: String, required: true },
        repmiddlename: { type: String },
        replastname: { type: String, required: true },
        repmaidenname: { type: String, required: true }
    },
    reptydoc: { type: String, default: 'CC' },
    repproycedulaId: { type: String, required: true },
    proycateg: { type: String },
    proyphoneNum: { type: String, required: true },
    proyemail: { type: String, required:true },
    proyadd: {
        proyaddress: { type: String },
        proyvereda: { type: String },
        proymunic: { type: String },
        proydept: { type: String },
        proypais: { type: String, default: 'Colombia' }
    },
    proycategories: {
        proyectone: { type: String },
        proyecttwo: { type: String },
        proyectthre: { type: String },
        proyectfour: { type: String },
        proyectfive: { type: String },
        proyectsix: { type: String },
        proyectseven: { type: String }
    },
    farmingtime: { type: String },
    comunity: { type: String },
    marketing: { type: String },
    certificados: {
        certifxus: { type: String, default: 'ZanaHora' },
        certnameus: { type: String, default: 'Confianza' },
        certifus: { type: String, },
        certdateus: { type: String },
        certplace: { type: String, },

        certifxbpm: { type: String },
        certnamebpm: { type: String, default: 'Manipulación de Alimentos' },
        certifbpm: { type: String },
        certdatebpm: { type: String },
        certplabpm: { type: String },

        certifxuna: { type: String },
        certnameuna: { type: String },
        certifuna: { type: String },
        certdateuna: { type: String },
        certplauna: { type: String },
        
        certifxdos: { type: String },
        certnamedos: { type: String },
        certifdos: { type: String },
        certdatedos: { type: String },
        certplados: { type: String },

        certifxtre: { type: String },
        certnametre: { type: String },
        certiftre: { type: String },
        certdatetre: { type: String },
        certplatre: { type: String },
        mascertif: { type: String }
    },
    redessocial: {
        proyfacebook: { type: String },
        proyinstagram: { type: String },
        proytwitter: { type: String }
    },
    visit: {
        visitax: { type: String }, 
        testigos: {
            visitax1: { type: String },
            cedviscc1: { type: String },
            visitax2: { type: String },
            cedviscc2: { type: String }, 
            visitax3: { type: String },
            cedviscc3: { type: String } 
        },
        agricola: {
            vis1: { type: String },
            vis2: { type: String },
            vis2t: { type: String },
            vis2d: { type: String },
            vis3: { type: String },
            vis3t: { type: String },
            vis3d: { type: String },
            vis4: { type: String },
            vis5: { type: String },
            vis6: { type: String },
            vis6t: { type: String },
            vis7: { type: String },
            vis7t: { type: String },
            vis8: { type: String },
            vis9: { type: String },
            vis9t: { type: String },
            vis10: { type: String },
            vis10t: { type: String },
            vis11t: { type: String },
            vis12t: { type: String },
            vis13t: { type: String },
            vis14: { type: String },
            vis14t: { type: String },
            vis15t: { type: String },
            vis16: { type: String },
            vis16t: { type: String },
            vis32: { type: String }
        },
        prosesados: {
            vis17: { type: String },
            vis17t: { type: String },
            vis18: { type: String },
            vis18t: { type: String },
            vis19: { type: String },
            vis19t: { type: String },
            vis20: { type: String },
            vis20t: { type: String },
            vis21: { type: String },
            vis21t: { type: String },
            vis22: { type: String },
            vis22t: { type: String },
            vis23: { type: String },
            vis24: { type: String },
            vis24t: { type: String },
            vis25: { type: String },
            vis25t: { type: String },
            vis26: { type: String },
            vis26t: { type: String },
            vis27: { type: String },
            vis28: { type: String },
            vis28t: { type: String },
            vis29t: { type: String },
            vis30: { type: String },
            vis30t: { type: String },
            vis31: { type: String },
            vis31t: { type: String }
        },
        otrosprod: {
            vis33: { type: String },
            vis33t: { type: String },
            vis34: { type: String },
            vis34t: { type: String },
            vis35: { type: String },
            vis35t: { type: String },
            vis36: { type: String },
            vis37: { type: String },
            vis37t: { type: String },
            vis38: { type: String },
            vis38t: { type: String },
            vis39: { type: String },
            vis40: { type: String },
            vis40t: { type: String },
            vis41: { type: String },
            vis41t: { type: String }

        },
        prodsug: { type: String }
    },
    productos: {
        prodsug: { type: String },
        prodappr: { type: String }
    },
    notas: {
        notasapply: { type: String }, // Aplicacion
        notasvisit: { type: String }, // Visita
        notasvisit1: { type: String }, // otra Visita
        notasappr: { type: String }, // Aprobado
        nonotas: { type: String }, // Negado
        retnotas: { type: String}, // Retirado
        delnotas: { type:  String } // Sancionado
    },
    visitwitness: {
        visitax: { type: String }, // responsable
        visitax1: { type: String }, // testigo1
        visitacc1: { type: String }, // documento
        visitax2: { type: String }, // testigo2
        visitacc2: { type: String }, // documento
        visitax3: { type: String }, // testigo3
        visitacc3: { type: String }  // documento
    },
    proydate: {
        proyAappldate: { type: String}, // Aplicacion
        proyVisdate: { type: String }, // Visita
        visitformdate: { type: String }, // Diligencia inicial del formulario
        proyApprdate: { type: String }, // Aprobado
        proyNodate: { type: String }, // Negado
        proyRetdate: { type: String }, // Retirado
        proyDeldate: { type: String }, // Sancionado
        date: { type: Date, default: Date.now } // Modificacion de la db
    },
    proyhabeas: { type: String }
});


module.exports = mongoose.model('Proyecto', ProyectSchema)
