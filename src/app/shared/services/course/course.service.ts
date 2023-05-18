import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public currentLesson: number = -1;
  public basicLevel1Progress: number = 0;
  public basicLevel2Progress: number = 0;

  public lecture1VideoDescription: string = 'Abecedario Wayuu';
  public lecture2VideoDescription: string = '¿Cómo saludar en Wayuunaiki?';

  public lecture1Title: string = 'Abecedario Wayuunaiki';
  public lecture1Content: string = 'El wayuunaiki (guajiro), de la familia lingüística arawak, es la lengua de los Wayuu, ' +
    'habitantes de la Península de La Guajira (noreste colombiano, noroeste venezolano).\n\n' +
    'El alfabeto wayuunaiki consta de 20 letras: a, ch, e, i, j, k, \', l, m, n, o, p, r, s, sh, t, u, ü, w, y. Seis ' +
    'son vocales: a, e, i, o, u, ü son vocales, las demás consonantes, aunque "w", "y" pueden considerarse semivocales por ' +
    'su naturaleza fonológica.';

  public lecture2Title: string = 'Saludos';
  public lecture2Content: string = 'En la cultura Wayuu, Asakaa (el saludo) es una manifestación simbólica muy importante. Porque a través de él, se expresa el afecto que se le tiene a la persona. De igual manera, la atención se considera primordial dentro de la cultura y en especial la persona que saluda es la que llega al lugar. Asimismo, no es tenido en cuenta el saludo de los buenos días, sino que se pregunta: ¿Jamaya pü"lapüin? que significa: ¿Qué tal estuvo tu sueño?.';

  public example1Title: string = 'Pronunciación Abecedario Wayuunaiki';
  public example1Content: string = 'Cada palabra en wayuunaiki se puede leer con el mismo sonido de las letras en español, salvo excepciones: \n\n' +
    '- Las vocales dobles suenan más largas que las vocales simples: aakataa (quitar), aneekaa (escoger), miichi (casa).\n\n' +
    '- Las consonantes dobles suenan más largas que las consonantes simples: anneerü (oveja), asottaa (quebrar).\n\n' +
    '- La letra ü suena como la ‘u’, pero sin redondear los labios: pütchi (palabra).\n\n' +
    '- La letra k suena como la ‘c’ en ‘casa’ y la ‘qu’ en ‘queso’: ekaa (comer), siki (fuego).\n\n' +
    '- La letra \' es un cierre glotal: a\'anaa (tejer), ka\'i (día), ja\'rai (cinco).\n\n' +
    '- La letra l es semejante a la ‘r’ de español. Es una vibrante simple' +
    ' pero se pronuncia con la lengua en posición ligeramente más lateral y un poco más hacia atrás que para pronunciar la ‘r’: alawaa (mentira), aleshi (cuñado)\n\n'

  public exercise1Content: string = 'Investigue cómo se pronuncia la "r", las palabras que terminan en "rü" y la letra "ch", y d' +
    'e al menos 1 ejemplo de cada uno. Al terminar la actividad adjunte el archivo en formato .pdf, .docx o .txt.';
  public uploadedFile?: File;

  public test1StepContent: string[] = ['Cuáles son las consonantes siguientes a "P y R"?', '¿Cuál es la sexta vocal?',
    '¿Cuántas consonantes conforman el alfabeto wayuunaiki?', '¿Qué palabra se escucha en el siguiente audio?'];
  public test1Step1: string[] = ['SH, T, U', 'H, S, T', 'S, SH y T', 'W, Y, T'];
  public test1Step2: string[] = ['U', 'A', 'Ü', 'E'];
  public test1Step4: string[] = ['Muusa', 'Mujuu', 'Shunui', 'Yüüja'];

  public test1CorrectAnswer1: string = 'S, SH y T';
  public test1CorrectAnswer2: string = 'Ü';
  public test1CorrectAnswer3: string = '15';
  public test1CorrectAnswer4: string = 'Muusa';

  public testResults: number = 0;

  public lesson1CompletionStatus: CompletionStatus[] = [
    {
      section: 'lecture',
      completed: false,
      locked: false
    },
    {
      section: 'example',
      completed: false,
      locked: true
    },
    {
      section: 'exercise',
      completed: false,
      locked: true
    },
    {
      section: 'test',
      completed: false,
      locked: true
    },
  ];
  public lesson2CompletionStatus: CompletionStatus[] = [
    {
      section: 'lecture',
      completed: false,
      locked: false
    },
    {
      section: 'example',
      completed: false,
      locked: true
    },
    {
      section: 'exercise',
      completed: false,
      locked: true
    },
    {
      section: 'test',
      completed: false,
      locked: true
    },
  ];

  constructor() { }
}

export interface CompletionStatus {
  section: string;
  completed: boolean;
  locked: boolean;
}
