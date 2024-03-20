describe("titulo", ()=>
{
		it('teste - soma 1+1', ()=>{
			expect(soma(1,1)).toEqual(2);
		});
		it('teste - soma 1+2', ()=>{
			expect(soma(1,2)).toEqual(3);
		});
		
		var n1=[1,2,3,4];
		it('loop', ()=>{
			for(var i=0; i< n1.length; i++)
				expect(soma(n1[i],1)).toEqual(n1[i]+1);
		});
});