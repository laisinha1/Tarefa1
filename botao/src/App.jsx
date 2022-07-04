import Button from "./Button.jsx";

function App(){

	const button = [
		{
			titu: "PREVIOUS",
			subti: "jQUERY: DELECT UPDATE OF HTML ELEMENT",
		},
		{
			titu: "NEXT",
			subti: "RAILS + DEVISE WORKING WITH MULTIPLE MODELS",
		},
	];

	return(

		<div className="botoes"> 
			{
			button.map((bot, botoes) => {
					return <Button key={botoes}
							titu={bot.titu}
							subti={bot.subti}
						/>;
				})
			}
	  </div>
	);
}

export default App;