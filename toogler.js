var nav = document.getElement( "#actions > nav" );
var item = document.createElement('div');
item.style.display = 'block';
item.style.cursor = 'pointer';
item.classList.add( 'actionItem' );
item.innerHTML='<a class="aiButton" id="toggleSidebar" title="Toggle sidebar"><svg width="34" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left"><polygon points="16 12 26 12 17 19 5 3"></polygon></svg>Toggle Sidebar</a>';
nav.appendChild(item);
$( 'toggleSidebar' ).addEventListener( 'click', ( function( evt ) {
	evt.preventDefault();
	$( 'sidebar' ).toggle();
	$( 'content' ).style.margin = ( $( 'content' ).style.margin === '0px' ) ? '0 0 0 210px' : '0px';
}));
