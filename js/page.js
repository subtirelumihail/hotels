$(function(){
 
function Header(){
	this.container = $('.navbar');
	this.shadowCat = 'ninja-cat';
}   

Header.prototype.setAnimation = function(){
	this.Top = $(document).scrollTop();
	return (this.Top > 0 && !_header.container.hasClass(_header.shadowCat) ) || this.Top == 0  ? _header.container.toggleClass(_header.shadowCat) : false;
}

var _header = new Header();
$(window).scroll(_header.setAnimation);

});
