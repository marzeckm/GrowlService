/**
 * Minimal growl-service for showing notifications on websites
 * 
 * @author Maximilian Marzeck - 2023
 * @link https://www.marzeck.de/
 */

/**
 * Enum for checking the type of the growl-message 
 * 
 * @class GrowlServiceMessageType
 * @returns {AbstractEnum} GrowlServiceMessageType
 */
const GrowlServiceMessageType = function(){
    return {
        /**
         * When a growl-message is an info (blue)
         * @var {GrowlServiceMessageType} INFO
         */
        INFO: "info",

        /**
         * When a growl-message shows success (green)
         * @var {GrowlServiceMessageType} SUCCESS
         */
        SUCCESS: "success",

        /**
         * When a growl-message shows a warning (yellow)
         * @var {GrowlServiceMessageType} WARNING
         */
        WARNING: "warning",

        /**
         * When a growl-message shows an error (red)
         * @var {GrowlServiceMessageType} ERROR
         */
        ERROR: "error",
    }
} 

/**
 * @class GrowlService
 * @returns {GrowlService} GrowlService
 */
const GrowlService = function(){
    /**
     * Is called when when the GrowlService gets initialized first
     * @function Constructor
     */
    (function(){if(!document.querySelector(".growlservice-container")){
        const growlserviceContainer = document.createElement('div');
        growlserviceContainer.classList.add("growlservice-container");
        document.body.appendChild(growlserviceContainer);
    }})();
    
    return {
        /**
         * Contains the growl-service-container
         * @var {HtmlNode} container
         */
        container: document.querySelector(".growlservice-container"),
        
        /**
         * Is called, when an info has to be displayed
         * @public @function info 
         * @param {string} name 
         * @param {string} message
         * @returns {void} 
         */
        info: function(name, message){
            this._showMessage(name, message, GrowlServiceMessageType().INFO);
        },

        /**
         * Is called, when an success has to be displayed
         * @public @function success 
         * @param {string} name 
         * @param {string} message
         * @returns {void} 
         */
        success: function(name, message){
            this._showMessage(name, message, GrowlServiceMessageType().SUCCESS);
        },

        /**
         * Is called, when a warning has to be displayed
         * @public @function warning 
         * @param {string} name 
         * @param {string} message
         * @returns {void} 
         */
        warning: function(name, message){
            this._showMessage(name, message, GrowlServiceMessageType().WARNING);
        },

        /**
         * Is called, when an error has to be displayed
         * @public @function error 
         * @param {string} name 
         * @param {string} message
         * @returns {void} 
         */
        error: function(name, message){
            this._showMessage(name, message, GrowlServiceMessageType().ERROR);
        },

        /**
         * Show a growl message in the growl service
         * Do no call directly!
         * 
         * @private @function showMessage
         * @param {string} name 
         * @param {string} message 
         * @param {GrowlServiceMessageType} messageType 
         * @returns {void}
         */
        _showMessage: function(name, message, messageType){
            this.container.appendChild(this._createMessageElement(name, message, messageType));
        },

        /**
         * Creates an GrowlMessage that can be displayed by the growl service
         * Do not call directly!
         * 
         * @private @function createMessageElement
         * @param {string} name 
         * @param {string} message 
         * @param {GrowlServiceMessageType} messageType 
         * @returns {HtmlNode}
         */
        _createMessageElement: function(name, message, messageType){
            const messageElement = 
                this._createAbstractElement("div", "", ["growlservice-message", messageType]);

            messageElement.appendChild(this._createAbstractElement("strong", name, []));
            messageElement.appendChild(this._createAbstractElement("div", message, []));
            messageElement.appendChild(this._createAbstractElement("a", "", [], function(){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }));

            // Destroys itself after 5 seconds
            setTimeout(function(){
                if(messageElement.parentNode)
                    messageElement.parentNode.removeChild(messageElement);
            }, 5000);

            return messageElement;
        },

        /**
         * Creates an HtmlNode with type, innerText, classes und onclick-event
         * Do not call directly!
         * 
         * @private @function createAbstractElement
         * @param {string} type 
         * @param {string} innerText 
         * @param {string[]} classList 
         * @param {function | null} onClick 
         * @returns {HtmlNode}
         */
        _createAbstractElement: function(type, innerText, classList, onClick=null){
            const abstractElement = document.createElement(type);
            abstractElement.innerText = innerText;

            for(const className of classList)
                abstractElement.classList.add(className);

            if(onClick)
                abstractElement.onclick = onClick;

            return abstractElement;
        }
    }
}
