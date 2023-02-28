const targetDate  = '2022-09-27T19:00:00'

function getTimeSegmentElements(segmentElement) {
    const segmentDisplay = segmentElement.querySelector('.segment-display')

    const segmentDisplayTop = segmentDisplay.querySelector('.segment-display__top')
    const segmentDisplayBottom = segmentDisplay.querySelector('.segment-display__bottom')
    const segmentOverlay = segmentDisplay.querySelector('.segment-overlay')
    const segmentOverlayTop = segmentDisplay.querySelector('.segment-overlay__top')
    const segmentOverlayBottom = segmentDisplay.querySelector('.segment-overlay__bottom')

    return {
        segmentDisplayTop,
        segmentDisplayBottom,
        segmentOverlay,
        segmentOverlayTop,
        segmentOverlayBottom
    }
}

function updateSegmentValues(displayElement, overlayElement, value) {
    displayElement.textContent = value
    overlayElement.textContent = value

}

function updateTimeSegment(segmentElement, timeValue) {
    const segmentElements = getTimeSegmentElements(segmentElement)

    segmentElements.segmentOverlay.classList.add('flip')

    updateSegmentValues(
        segmentElements.segmentDisplayTop,
        segmentElements.segmentDisplayBottom,
        timeValue
    )
    function finishAnimation() {
        segmentElements.segmentOverlay.classList.remove('flip')
         updateSegmentValues(
            segmentElements.segmentDisplayBottom,
            segmentElements.segmentDisplayTop,
            timeValue
    
         )
          
      this.removeEventListener('animationend',finishAnimation)
    }

    segmentElements.segmentOverlay.addEventListener('animationend',finishAnimation)
}

function updateTimeSection(sectionID, timeValue) {
    const firstNumber = Math.floor(timeValue/10)
    const secondNumber = timeValue % 10

    const sectionElement = document.getElementById(sectionID)
    const timeSegments =sectionElement.querySelectorAll('.time-segment')

    updateTimeSegment(timeSegments[0], firstNumber)
    updateTimeSegment(timeSegments[1], secondNumber )
}

