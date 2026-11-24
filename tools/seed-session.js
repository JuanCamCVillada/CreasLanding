// Sesiones de ejemplo (escritas a mano) para tomar las capturas de la landing.
// Uso: node -e "const s=require('./seed-session.js');console.log(JSON.stringify(JSON.stringify(s.list)))"
// y guardar el resultado en localStorage como 'flutter.graph_sessions' en la app web.
const n=(id,type,label,description,cluster,origin,kind,extra={})=>({id,type,label,description,cluster,origin,kind,...extra});
const g1={
 idea_frame:{slots:{problema:'Se lee mucho y se retiene poco',dominio:'educacion',actores:'Estudiantes universitarios',restricciones:'Poco tiempo y sin disciplina diaria',analogias:'Repetición espaciada',precedentes:'Anki, resúmenes automáticos'},missing:[]},
 nodes:[
  n('n1','concepto','App para no olvidar lo que leo','Idea del usuario: una herramienta que convierta la lectura en memoria duradera.','educacion','usuario','idea',{sequence:1}),
  n('n2','fuente','Releo apuntes y no recuerdo','Observación propia: releer da sensación de dominio, no retención.','educacion','usuario','observacion',{level:1}),
  n('n3','fuente','Curva del olvido (Ebbinghaus)','Estudio clásico sobre cómo decae la memoria sin repaso.','educacion','sugerido','recurso',{level:1,confidence:0.8}),
  n('n4','concepto','Repetición espaciada','Repasar justo antes de olvidar, con intervalos crecientes.','educacion','sugerido','tecnica',{confidence:0.8,sequence:2}),
  n('n5','concepto','Cinco minutos al día','Restricción de diseño: la sesión debe caber en un descanso.','ux-diseno','sugerido','restriccion',{confidence:0.7,sequence:3}),
  n('n6','concepto','Preguntar rinde más que releer','Hipótesis: recuperar activamente fija mejor que repasar pasivamente.','educacion','sugerido','hipotesis',{confidence:0.7,sequence:4}),
  n('n7','concepto','Preguntas desde tus propias notas','Decisión: el sistema genera las preguntas a partir de lo que el usuario ya escribió.','datos-ia','sugerido','decision',{confidence:0.6,sequence:5}),
  n('n8','concepto','Retención medible por tema','Resultado: porcentaje de aciertos por tema a lo largo de las semanas.','producto-negocio','sugerido','resultado',{confidence:0.6,sequence:6}),
  n('n9','concepto','Tarjetas de estudio','Recuperada de tu sesión anterior sobre tarjetas con foto de apuntes.','educacion','sugerido','tecnica',{confidence:0.7,sequence:3,memory_ref:'ses-0001:p1'}),
 ],
 edges:[
  {id:'e1',source:'n2',target:'n1',relation:'desencadena'},
  {id:'e2',source:'n3',target:'n4',relation:'inspira'},
  {id:'e3',source:'n1',target:'n4',relation:'transforma_en'},
  {id:'e4',source:'n4',target:'n7',relation:'desencadena'},
  {id:'e5',source:'n6',target:'n7',relation:'inspira'},
  {id:'e6',source:'n9',target:'n7',relation:'inspira'},
  {id:'e7',source:'n7',target:'n8',relation:'desencadena'},
 ],
 affinity_edges:[{source:'n4',target:'n6',weight:0.7},{source:'n7',target:'n9',weight:0.8}],
 semantic_edges:[{source:'n7',target:'n5',relation:'depende_de'},{source:'n9',target:'n4',relation:'instancia_de'}],
 turning_points:[{node_id:'n7',evidence:'La idea deja de ser "recordar mejor" y pasa a "preguntarte lo que ya escribiste".',convergence:true,direction_change:true}],
 followup_questions:['¿Estudias con apuntes propios o con material que te dan?','¿Qué pasó la última vez que dejaste de repasar algo importante?'],
};
const g0={idea_frame:null,nodes:[n('p1','concepto','Tarjetas de estudio con foto de apuntes','Fotografiar el cuaderno y convertirlo en tarjetas.','educacion','usuario','idea',{sequence:1})],edges:[],affinity_edges:[],turning_points:[],followup_questions:[]};
delete g0.idea_frame;
const s=[
 {id:'ses-0002',raw_input:'Quiero una app que me ayude a no olvidar lo que leo.',graph:g1,created_at:'2026-11-12T10:30:00.000'},
 {id:'ses-0001',raw_input:'Tarjetas de estudio con foto de mis apuntes.',graph:g0,created_at:'2026-11-05T18:10:00.000'},
];
module.exports={list:s.map(x=>JSON.stringify(x))};
