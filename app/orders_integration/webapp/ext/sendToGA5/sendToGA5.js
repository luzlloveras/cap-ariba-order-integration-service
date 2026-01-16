sap.ui.define([], function() {
    'use strict';

    return {
        send: function() {
            const ga5Service = cds.connect.to('GA5');
            let response;
                
            try {
                response = ga5Service.post('/Orders');
                return response;
            } catch (error) {
                req.error(500, error.message)
            }
        }


    };
});