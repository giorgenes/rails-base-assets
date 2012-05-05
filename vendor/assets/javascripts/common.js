if(window.vsh_cfg_autoblock_on_ajax == undefined) {
  window.vsh_cfg_autoblock_on_ajax = true;
}

function vsh_url_add_params(url, params)
{
	var i;
	for(i in params) {	
		if(url.match(/\?/) == null) {
			url += '?' + i + '=' + encodeURI(params[i]);
		}
		else {
			url += '&' + i + '=' + encodeURI(params[i]);
		}
	}
	
	return url;
}

function vsh_popup(url)
{
	url = vsh_url_add_params(url, {l: 'popup'});
	$.get(url, function(data) {
		var container = $('#jqmContainer');
		container.html(data);
    container.center();
    container.jqmShow();
	});
}

function vsh_popup_close()
{
		var container = $('#jqmContainer');
		container.jqmHide();
}

function vsh_show_errors()
{
	$(".field_error_tip").each(function() {
   	var e = $(this.parentNode).find(".inline-errors");
	   var msg = "";
		if(e.length > 0) { msg = e.html(); }
		console.log('antes qtip');
		$(this).qtip({
			content: msg,
			show: "mouseover",
			style: { name: 'dark' }
		});
		console.log(msg);
	});
}

jQuery(function ($) {
	$('a[data-popup]').live('click', function (e) {
		e.preventDefault();
		vsh_popup($(this).attr('href'));
	});

	$('a[data-lsub]').live('click', function (e) {
     	e.preventDefault();
		var url = vsh_url_add_params($(this).attr('href'), {l: 'empty'})
		$(vshbase_lsub).load(url);
	});

  if(window.vsh_cfg_autoblock_on_ajax) {
	  $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
  }

	$().ready(function() {
  		$('#jqmContainer').jqm();
  	});
});

