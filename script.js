execute = function() {
    openAllChats = function() {
            // parse and open all friends online
            var cw = document.querySelector('#BuddylistPagelet').children[0].children[0].children[1].children[0].children[0].children[1].children[0].children[0];
            var cwLinks = cw.children[0].children;
            for(var i in cwLinks) {
                cwLinks[i].click();
                var allChats = document.querySelector('#ChatTabsPagelet').children[0].children[1];
            }
        };
    try {
         
        openAllChats();
    }
    catch(err) {
         openChatDock = function() {
            // open chat list
            var clb = document.querySelector('#fbDockChatBuddylistNub');
            var clbChildren = clb.children;
            for(var i in clbChildren) {
                if(clbChildren[i].tagName ===  'A') {
                    var clbLink = clbChildren[i]
                }
            }
            //open 
            clbLink.click();
        };
        openChatDock();
        openAllChats();
    }
  lastMessages = {};
    chatMessage = ""
    latestMessage = "";
    chatWithEveryone = function(message) {
        var pressEvent = document.createEvent ('KeyboardEvent');   
        pressEvent.initKeyEvent ('keypress', true, true, window, true, false, false, false, 13, 0);
        var allInputs = [];
        
        var answering = [];

        var allChats = document.querySelector('#ChatTabsPagelet').children[0].children[1].children;
        for(var i in allChats) {
            try 
            {
                var popupChatLink = allChats[i].children[0];
                popupChatLink.click();
                var thisChat = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[i].children[1].children[0].children[0].children[3].children[0].children[0];   
                allInputs.push(thisChat);
                thisChat.value = message; 
                thisChat.dispatchEvent (pressEvent);
            }
            catch(err) {
                //console.log('eerrrr ' + err);
            }
                
        }
    }
    chatWithEveryone('Hey FB engineers!');

        runInterval = function() {
            var allChats = document.querySelector('#ChatTabsPagelet').children[0].children[1].children;
            for(var i in allChats) {
                try {
                var thisChat = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[i].children[1].children[0].children[0].children[3].children[0].children[0];   
                var conversationArray = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[i].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[2].children;
                if(conversationArray.length > 0) {
                    messagesArray = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[0].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[2].children[conversationArray.length -1].children[1].children
                    lastMessage = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[0].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[2].children[conversationArray.length -1].children[1].children[messagesArray.length -1].children[0].innerHTML
                    if(lastMessage != chatMessage && lastMessage != latestMessage ) {
                        chatWithEveryone(lastMessage);
                        latestMessage = lastMessage;
                    }
                }
                }
                catch(err) {};
            }

            console.log('workin');
            }
        setInterval("runInterval", 100);

setInterval(function() {
            var allChats = document.querySelector('#ChatTabsPagelet').children[0].children[1].children;
            for(var i in allChats) {
                try {
                var thisChat = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[i].children[1].children[0].children[0].children[3].children[0].children[0];   
                var conversationArray = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[i].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[2].children;
                if(conversationArray.length > 0) {
                    messagesArray = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[0].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[2].children[conversationArray.length -1].children[1].children
                    lastMessage = document.querySelector('#ChatTabsPagelet').children[0].children[1].children[0].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[2].children[conversationArray.length -1].children[1].children[messagesArray.length -1].children[0].innerHTML
                    if(lastMessage != chatMessage && lastMessage != latestMessage ) {
                        chatWithEveryone(lastMessage);
                        latestMessage = lastMessage;
                    }
                }
                }
                catch(err) {};
            }

            console.log('workin');
            }, 100);

}
execute();
