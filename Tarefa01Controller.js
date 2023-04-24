({
    creatTarefa01 : function(component, event, helper) {
        
               
        var objLead = component.get("v.objLead");
               
        console.log("objLead :: " + JSON.stringify(objLead));
                
        var action = component.get("c.Tarefa01");
            
        action.setParams({
            "objLead":objLead
        });
        
                
        action.setCallback(this, function(leadRecds){
                       
            var state = leadRecds.getState();
                        
            if (state === "SUCCESS") {
               
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Sucesso!",
                    "message": "O Lead foi criado!!",
                    "type": "success"           
                });
                toastEvent.fire();
                $A.get('e.force:refreshView').fire();
            } else {
                alert("Preencha os dados corretamente");
            }
        });
        
        // Adiciona a ação ao final da fila de ações para ser executada.
        $A.enqueueAction(action);
    }
})
