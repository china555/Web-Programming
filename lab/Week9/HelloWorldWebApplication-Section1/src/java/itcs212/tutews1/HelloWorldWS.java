/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package itcs212.tutews1;

import java.text.DecimalFormat;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author Kittikorn
 */
@WebService(serviceName = "HelloWorldWS")
public class HelloWorldWS {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }

    /**
     * Web service operation
     */
@WebMethod(operationName = "squareMethod")
 public String squareMethod(@WebParam(name = "number") final int number) {
 //TODO write your implementation code here:
 int result = number*number;
 String strResult = Integer.toString(result);
 return strResult;
 }
@WebMethod(operationName = "ConvertercmToInch")
public String ConvertercmToInch(@WebParam(name = "number") final double number){
    DecimalFormat x = new DecimalFormat("#.##");
    return x.format(number/2.54);
}

@WebMethod(operationName = "CelsiusToFahrenheit")
public String CelsiusToFahrenheit(@WebParam(name = "number") final double number){
    DecimalFormat x = new DecimalFormat("#.##");
    return x.format(number*9/5+32);
}
@WebMethod(operationName = "getMydetail")
public String getMydetail(@WebParam(name = "getby_id") final int id){
    return "\"Kittikorn\","+"\"Keeratikriengrai\","+"\"0982584884\","+"\"kitt@student.mahidol.ac.th\"";
}
}
