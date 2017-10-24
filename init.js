// Virtual DOM by Tim Bowman
"Use Strict";
// Create an element
function createElement(tag, config, children = null) {
	const { className } = config;
	
	return {
		tag: tag,
		props: {
			children: children
		},
		className: className,
		dom: null
	};
}

// Mount elements
function mountElement(element, parentDOMNode) {
	const { tag, className, props } = element;
	
	const domNode = document.createElement(tag);
	
	element.dom = domNode;
	
	if(props.children) {
		props.children.forEach(function(child) {
			mountElement(child, domNode);
		});
	}
	
	if(className !== undefined) {
		domNode.className = className;
	}
	
	//append domNode to DOM
	parentDOMNode.appendChild(domNode);
}

const root = document.getElementById('root');
const app = createElement('div', {className: 'wrapper'}, [createElement('h1', {className:'title'})]);

mountElement(app, root);
