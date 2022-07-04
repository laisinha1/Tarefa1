import "./Button.css";

function Button ({titu, subti}){
	
	return( 
        <button className="inicio">
		<div>
		<h4 className='titulo1'>{titu}</h4> 
		<p className='subtitulo1'>{subti}</p>
		 </div>
         </button>
	);
}

export default Button;