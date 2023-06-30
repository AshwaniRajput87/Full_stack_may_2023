/**
 *     var varName = 10;
       // fn def.
        function b() {
            console.log(varName);
        }
        function fn() {
            var varName = 20;
            //fn calling
            b();
            console.log(varName);
        }
        fn();
*/
        // What would be the output:  10 20

        /**
         * 
         * FEC b() -> varName -> outerscope -> your function definition b()
         * FEC fn() -> varName = 20
         * GEC -> varName = 10;
         * 
         * JS saying that your outer scope is lexically scoped -> 
         *     existence/position of a variable(varName) -> your function definition
         * 
         */


        /**
         * Problem asked: 
         * const objArr = [ 
         *   {
         *       model: 'abc', 
         *      alparr = [
                  { ab: '123', b: '8'}
                ]
            }];
            By using this array can you please map and return the array by converting ab value in decimal
            so final output will be
            [ 
                {
                    model: 'abc', 
                    alparr = [
                        { ab: 12.3, b: '8'} // ab from '123' to number 12.3
                    ]
                } 
            ]
         */

        const objArr = [ 
            {
                model: 'abc', 
                alparr: [
                    { ab: '123', b: '8'}
                ]
            } 
        ];

       const result =  objArr.map((obj)=>{
           const alparr = obj.alparr.map((item)=> {
                const ab = parseFloat(item.ab)/10;
                return {...item, ab};
           });
           return {...obj, alparr};
       });

       console.log(result);

         
