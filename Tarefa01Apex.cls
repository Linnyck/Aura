public class ProjetoMamaco1Apex {
    
    @AuraEnabled 
     
    public static String Tarefa01 (Lead objLead){
        
        insert objLead;
        
        return objLead.id; //Retorna o ID da conta recém-criada.
        
    }
    
}
