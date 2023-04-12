jQuery(document).ready(function($) {
	var $notasrodape = $("#notas-rodape");
	var $btnotas = $(".bt-nota");

	$btnotas.on('click', function(event) {
		var thisNumero = $(this).attr("data-nota");
		$btnotas.removeClass('atual');
		$(this).addClass('atual');
		$notasrodape
		.addClass('visivel')
		.find(".notas [data-nota]")
		.removeClass('atual')
		.filter(function(index) {
			return $(this).attr('data-nota') === thisNumero;
		})
		.addClass('atual');
	});

	$notasrodape.find(".fechar").on('click', function(event) {
		$btnotas.removeClass('atual');
		$notasrodape.removeClass('visivel').find(".notas div").removeClass('atual');
	});
});