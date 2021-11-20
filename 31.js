<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>

/**

The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation

*/