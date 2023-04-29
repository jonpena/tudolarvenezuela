import { useRef } from 'react';

const Faq = () => {
	const questionRef = [
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
	];

	const onClickFAQ = (question: React.RefObject<HTMLDivElement>, i: Number) => {
		questionRef.forEach((itemRef, index) => {
			if (i !== index) itemRef.current?.classList.add('hidden');
		});
		question.current?.classList.toggle('hidden');
	};

	return (
		<div className="bg-gradient w-full pt-12 pb-12">
			<h2 className="max-w-4xl mx-auto text-white text-size-4 font-bold leading-tight">
				Preguntas frecuentes
			</h2>

			{/* Question 1 */}

			<div
				className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-12 mx-auto rounded-lg bg-white cursor-pointer"
				onClick={() => onClickFAQ(questionRef[0], 0)}
			>
				<div className="flex items-center justify-start">
					<h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
						¿Qué es Nanotecks?
					</h3>
					<img
						className="w-10 md:w-12 h-auto absolute right-1"
						src="./assets/icon-plus.png"
						alt="icono plus"
					/>
				</div>
				<div ref={questionRef[0]} className="hidden mt-4 text-left text-size-0">
					<p className="ml-1">
						Nanotecks es una plataforma de transformación digital para cambiar
						la forma de trabajar con ayuda de la tecnología, ofreciendo
						herramientas digitales y soluciones más simples para todos sus
						usuarios tecnológicos.
					</p>
				</div>
			</div>

			{/* Question 2 */}

			<div
				className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
				onClick={() => onClickFAQ(questionRef[1], 1)}
			>
				<div className="flex items-center justify-start">
					<h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
						¿Cómo monetizo mi Cuenta?
					</h3>
					<img
						className="w-10 md:w-12 h-auto absolute right-1"
						src="./assets/icon-plus.png"
						alt="icono plus"
					/>
				</div>
				<div ref={questionRef[1]} className="hidden mt-4 text-left text-size-0">
					<p className="ml-1">
						Actualmente, hay dos formas de monetizar tu cuenta:
					</p>
					<p className="ml-1 mt-4">
						Primera forma: Es con la creación de Salas de Nanotecks para educar
						a tus seguidores con contenido prémium de tus conocimientos,
						cobrando con diferentes modelos.
					</p>
					<p className="ml-1 mt-4">
						Segunda forma: Es con la venta y comercialización de servicios o
						productos en el Comercio de Nanotecks.
					</p>
				</div>
			</div>

			{/* Question 3 */}

			<div
				className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
				onClick={() => onClickFAQ(questionRef[2], 2)}
			>
				<div className="flex items-center justify-start">
					<h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
						¿A quién va dirigido?
					</h3>
					<img
						className="w-10 md:w-12 h-auto absolute right-1"
						src="./assets/icon-plus.png"
						alt="icono plus"
					/>
				</div>
				<div ref={questionRef[2]} className="hidden mt-4 text-left text-size-0">
					<p className="ml-1">
						Nanotecks va dirigido a todos esos usuarios tecnológicos,
						profesionales, freelances, emprendedores y empresarios que desean
						trabajar con ayuda de la tecnología creando una cultura digital.
					</p>
				</div>
			</div>

			{/* Question 4 */}

			<div
				className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
				onClick={() => onClickFAQ(questionRef[3], 3)}
			>
				<div className="flex items-center justify-start">
					<h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
						¿Qué son las Salas?
					</h3>
					<img
						className="w-10 md:w-12 h-auto absolute right-1"
						src="./assets/icon-plus.png"
						alt="icono plus"
					/>
				</div>
				<div ref={questionRef[3]} className="hidden mt-4 text-left text-size-0">
					<p className="ml-1">
						Las Salas de Nanotecks son espacios muy parecido a un salón de
						clases para educar o aprender:
					</p>
					<p className="ml-1 mt-4">
						Educar: Es la creación de Salas para publicar contenido con tu
						conocimiento gratuito o prémium que puedes monetizar.
					</p>
					<p className="ml-1 mt-4">
						Aprender: Puedes añadir Salas de tu interés y unirte si son libres o
						comprar si son Prémium.
					</p>
				</div>
			</div>

			{/* Question 5 */}

			<div
				className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
				onClick={() => onClickFAQ(questionRef[4], 4)}
			>
				<div className="flex items-center justify-start">
					<h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
						¿Por qué cambiar la forma de trabajar?
					</h3>
					<img
						className="w-10 md:w-12 h-auto absolute right-1"
						src="./assets/icon-plus.png"
						alt="icono plus"
					/>
				</div>
				<div ref={questionRef[4]} className="hidden mt-4 text-left text-size-0">
					<p className="ml-1">
						Para ser más productivo y tener más libertad con ayuda de la
						tecnología tenemos que cambiar la forma de como trabajamos
						cotidianamente para adaptarnos a los cambios de la transformación
						digital que vivimos hoy en la actualidad y así crear más
						oportunidades para todos.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Faq;
