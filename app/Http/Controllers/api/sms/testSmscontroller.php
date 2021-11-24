<?php

namespace App\Http\Controllers\api\sms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Twilio\Rest\Client;
class testSmscontroller extends Controller
{

        /**
         * Write code on Method
         *
         * @return response()
         */
        // public function index()
        // {
        //     // $receiverNumber = "+639754906716";
        //     // $message = "Kita kitz bukas from -cangsky";
      
        //     // try {
      
        //     //     $account_sid = getenv("TWILIO_SID");
        //     //     $auth_token = getenv("TWILIO_TOKEN");
        //     //     $twilio_number = getenv("TWILIO_FROM");
      
        //     //     $client = new Client($account_sid, $auth_token);
        //     //     $client->messages->create($receiverNumber, [
        //     //         'from' => $twilio_number, 
        //     //         'body' => $message]);
      
        //     //     dd('SMS Sent Successfully.');
      
        //     // } catch (Exception $e) {
        //     //     dd("Error: ". $e->getMessage());
        //     // }

        //     $sid = getenv("TWILIO_SID");
        //     $token = getenv("TWILIO_TOKEN");
        //     $twilio = new Client($sid, $token);

        //     $validation_request = $twilio->validationRequests
        //                      ->create("+639756537266", // phoneNumber
        //                               ["friendlyName" => "My Home Phone Number"]
        //                      );

        //     print($validation_request->friendlyName);
        // }


        function itexmo($number,$message,$apicode,$passwd){
			$ch = curl_init();
			$itexmo = array('1' => $number, '2' => $message, '3' => $apicode, 'passwd' => $passwd);
			curl_setopt($ch, CURLOPT_URL,"https://www.itexmo.com/php_api/api.php");
			curl_setopt($ch, CURLOPT_POST, 1);
			 curl_setopt($ch, CURLOPT_POSTFIELDS, 
			          http_build_query($itexmo));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			return curl_exec ($ch);
			curl_close ($ch);
            }


        function index(Request $request) {


            $receivers = $request->receiver;

            foreach($receivers as $receiver) {
                $result = $this->itexmo($receiver,"Ang pogi ni Kamlon sobra!!!","TR-MARKJ537266_IZ44W", "7nb}((6lt@");
                if ($result == ""){
                echo "iTexMo: No response from server!!!
                Please check the METHOD used (CURL or CURL-LESS). If you are using CURL then try CURL-LESS and vice versa.	
                Please CONTACT US for help. ";	
                }else if ($result == 0){
                echo "Message Sent!";
                }
                else{	
                echo "Error Num ". $result . " was encountered!";
                }
            }


           
        }
}
