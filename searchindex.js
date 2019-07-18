Search.setIndex({docnames:["architecture","fulltext/fulltext","fulltext/fulltext.agent","fulltext/fulltext.agent.consumer","fulltext/fulltext.agent.tests","fulltext/fulltext.agent.tests.test_record_processor","fulltext/fulltext.celery","fulltext/fulltext.celeryconfig","fulltext/fulltext.config","fulltext/fulltext.controllers","fulltext/fulltext.domain","fulltext/fulltext.extract","fulltext/fulltext.factory","fulltext/fulltext.process","fulltext/fulltext.process.psv","fulltext/fulltext.process.tests","fulltext/fulltext.process.tests.test_process_psv","fulltext/fulltext.routes","fulltext/fulltext.services","fulltext/fulltext.services.compiler","fulltext/fulltext.services.pdf","fulltext/fulltext.services.store","fulltext/fulltext.services.tests","fulltext/fulltext.services.tests.test_pdf","fulltext/fulltext.worker","fulltext/modules","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["architecture.rst","fulltext/fulltext.rst","fulltext/fulltext.agent.rst","fulltext/fulltext.agent.consumer.rst","fulltext/fulltext.agent.tests.rst","fulltext/fulltext.agent.tests.test_record_processor.rst","fulltext/fulltext.celery.rst","fulltext/fulltext.celeryconfig.rst","fulltext/fulltext.config.rst","fulltext/fulltext.controllers.rst","fulltext/fulltext.domain.rst","fulltext/fulltext.extract.rst","fulltext/fulltext.factory.rst","fulltext/fulltext.process.rst","fulltext/fulltext.process.psv.rst","fulltext/fulltext.process.tests.rst","fulltext/fulltext.process.tests.test_process_psv.rst","fulltext/fulltext.routes.rst","fulltext/fulltext.services.rst","fulltext/fulltext.services.compiler.rst","fulltext/fulltext.services.pdf.rst","fulltext/fulltext.services.store.rst","fulltext/fulltext.services.tests.rst","fulltext/fulltext.services.tests.test_pdf.rst","fulltext/fulltext.worker.rst","fulltext/modules.rst","index.rst"],objects:{"":{fulltext:[1,0,0,"-"]},"fulltext.agent":{consumer:[3,0,0,"-"],tests:[4,0,0,"-"]},"fulltext.agent.consumer":{BadMessage:[3,1,1,""],FulltextRecordProcessor:[3,2,1,""]},"fulltext.agent.consumer.FulltextRecordProcessor":{process_record:[3,3,1,""],process_records:[3,3,1,""],sleep:[3,4,1,""],sleep_after_credentials:[3,4,1,""],update_secrets:[3,3,1,""],wait_for_stream:[3,3,1,""]},"fulltext.agent.tests":{test_record_processor:[5,0,0,"-"]},"fulltext.agent.tests.test_record_processor":{TestIndexPaper:[5,2,1,""]},"fulltext.agent.tests.test_record_processor.TestIndexPaper":{setUp:[5,3,1,""],test_notify:[5,3,1,""]},"fulltext.celeryconfig":{task_acks_late:[7,5,1,""],task_always_eager:[7,5,1,""],task_default_queue:[7,5,1,""],worker_prefetch_multiplier:[7,5,1,""]},"fulltext.config":{APPLICATION_ROOT:[8,5,1,""],AUTH_UPDATED_SESSION_REF:[8,5,1,""],AWS_ACCESS_KEY_ID:[8,5,1,""],AWS_REGION:[8,5,1,""],AWS_SECRET_ACCESS_KEY:[8,5,1,""],BASE_SERVER:[8,5,1,""],CANONICAL_ENDPOINT:[8,5,1,""],CANONICAL_HOST:[8,5,1,""],CANONICAL_PATH:[8,5,1,""],CANONICAL_PORT:[8,5,1,""],CANONICAL_PROTO:[8,5,1,""],CANONICAL_VERIFY:[8,5,1,""],COMPILER_ENDPOINT:[8,5,1,""],COMPILER_HOST:[8,5,1,""],COMPILER_PATH:[8,5,1,""],COMPILER_PORT:[8,5,1,""],COMPILER_PROTO:[8,5,1,""],COMPILER_VERIFY:[8,5,1,""],DEBUG:[8,5,1,""],DOCKER_HOST:[8,5,1,""],EXPLAIN_TEMPLATE_LOADING:[8,5,1,""],EXTERNAL_URL_SCHEME:[8,5,1,""],EXTRACTOR_IMAGE:[8,5,1,""],EXTRACTOR_VERSION:[8,5,1,""],JSONIFY_MIMETYPE:[8,5,1,""],JSONIFY_PRETTYPRINT_REGULAR:[8,5,1,""],JSON_AS_ASCII:[8,5,1,""],JSON_SORT_KEYS:[8,5,1,""],KINESIS_CHECKPOINT_VOLUME:[8,5,1,""],KINESIS_ENDPOINT:[8,5,1,""],KINESIS_SHARD_ID:[8,5,1,""],KINESIS_SLEEP:[8,5,1,""],KINESIS_START_AT:[8,5,1,""],KINESIS_START_TYPE:[8,5,1,""],KINESIS_STREAM:[8,5,1,""],KINESIS_VERIFY:[8,5,1,""],KUBE_TOKEN:[8,5,1,""],LOGGER_HANDLER_POLICY:[8,5,1,""],LOGGER_NAME:[8,5,1,""],LOGLEVEL:[8,5,1,""],MAX_CONTENT_LENGTH:[8,5,1,""],MOUNTDIR:[8,5,1,""],NAMESPACE:[8,5,1,""],PERMANENT_SESSION_LIFETIME:[8,5,1,""],PREFERRED_URL_SCHEME:[8,5,1,""],PRESERVE_CONTEXT_ON_EXCEPTION:[8,5,1,""],PROPAGATE_EXCEPTIONS:[8,5,1,""],REDIS_ENDPOINT:[8,5,1,""],SECRET_KEY:[8,5,1,""],SEND_FILE_MAX_AGE_DEFAULT:[8,5,1,""],SERVER_NAME:[8,5,1,""],SESSION_COOKIE_DOMAIN:[8,5,1,""],SESSION_COOKIE_HTTPONLY:[8,5,1,""],SESSION_COOKIE_NAME:[8,5,1,""],SESSION_COOKIE_PATH:[8,5,1,""],SESSION_COOKIE_SECURE:[8,5,1,""],SESSION_REFRESH_EACH_REQUEST:[8,5,1,""],STORAGE_VOLUME:[8,5,1,""],TEMPLATES_AUTO_RELOAD:[8,5,1,""],TESTING:[8,5,1,""],TRAP_BAD_REQUEST_ERRORS:[8,5,1,""],TRAP_HTTP_EXCEPTIONS:[8,5,1,""],URLS:[8,5,1,""],USE_X_SENDFILE:[8,5,1,""],VAULT_CERT:[8,5,1,""],VAULT_ENABLED:[8,5,1,""],VAULT_HOST:[8,5,1,""],VAULT_PORT:[8,5,1,""],VAULT_REQUESTS:[8,5,1,""],VAULT_ROLE:[8,5,1,""],VAULT_SCHEME:[8,5,1,""],WAIT_FOR_SERVICES:[8,5,1,""],WAIT_ON_STARTUP:[8,5,1,""],WORKDIR:[8,5,1,""]},"fulltext.controllers":{get_task_status:[9,6,1,""],retrieve:[9,6,1,""],service_status:[9,6,1,""],start_extraction:[9,6,1,""]},"fulltext.domain":{Extraction:[10,2,1,""]},"fulltext.domain.Extraction":{Status:[10,2,1,""],bucket:[10,4,1,""],completed:[10,4,1,""],content:[10,4,1,""],copy:[10,3,1,""],ended:[10,4,1,""],exception:[10,4,1,""],identifier:[10,4,1,""],owner:[10,4,1,""],started:[10,4,1,""],status:[10,4,1,""],task_id:[10,4,1,""],to_dict:[10,3,1,""],version:[10,4,1,""]},"fulltext.domain.Extraction.Status":{FAILED:[10,4,1,""],IN_PROGRESS:[10,4,1,""],SUCCEEDED:[10,4,1,""]},"fulltext.extract":{NoSuchTask:[11,1,1,""],TaskCreationFailed:[11,1,1,""],create_task:[11,6,1,""],get_task:[11,6,1,""],get_version:[11,6,1,""],is_available:[11,6,1,""],task_id:[11,6,1,""],update_sent_state:[11,6,1,""]},"fulltext.factory":{IAwaitable:[12,2,1,""],SubmissionSourceConverter:[12,2,1,""],create_web_app:[12,6,1,""],create_worker_app:[12,6,1,""],jsonify_exception:[12,6,1,""],register_error_handlers:[12,6,1,""],wait_for:[12,6,1,""]},"fulltext.factory.IAwaitable":{is_available:[12,3,1,""]},"fulltext.factory.SubmissionSourceConverter":{regex:[12,4,1,""]},"fulltext.process":{psv:[14,0,0,"-"],tests:[15,0,0,"-"]},"fulltext.process.psv":{expandWords:[14,6,1,""],normalize_text_psv:[14,6,1,""],process_text:[14,6,1,""],split_on_references:[14,6,1,""],tidy_txt_from_pdf:[14,6,1,""]},"fulltext.process.tests":{test_process_psv:[16,0,0,"-"]},"fulltext.process.tests.test_process_psv":{TestConvertToPSV:[16,2,1,""],TestConvertToPSVUnits:[16,2,1,""]},"fulltext.process.tests.test_process_psv.TestConvertToPSV":{test_tidy_text:[16,3,1,""],test_to_psv:[16,3,1,""]},"fulltext.process.tests.test_process_psv.TestConvertToPSVUnits":{test_expand_words:[16,3,1,""],test_remove_whitespace_is_idempotent:[16,3,1,""],test_text_has_continuations:[16,3,1,""],test_text_has_numbers:[16,3,1,""],test_text_has_symbols:[16,3,1,""],test_text_has_unwanted_keywords:[16,3,1,""],test_whitespace_all_over_the_place:[16,3,1,""]},"fulltext.routes":{best_match:[17,6,1,""],make_authorizer:[17,6,1,""],ok:[17,6,1,""],resource_id:[17,6,1,""],retrieve:[17,6,1,""],start_extraction:[17,6,1,""],task_status:[17,6,1,""]},"fulltext.services":{compiler:[19,0,0,"-"],pdf:[20,0,0,"-"],store:[21,0,0,"-"],tests:[22,0,0,"-"]},"fulltext.services.compiler":{Compiler:[19,2,1,""]},"fulltext.services.compiler.Compiler":{Meta:[19,2,1,""],NAME:[19,4,1,""],VERSION:[19,4,1,""],exists:[19,3,1,""],get_service_status:[19,3,1,""],is_available:[19,3,1,""],owner:[19,3,1,""],retrieve:[19,3,1,""]},"fulltext.services.compiler.Compiler.Meta":{service_name:[19,4,1,""]},"fulltext.services.pdf":{CanonicalPDF:[20,2,1,""],DoesNotExist:[20,1,1,""],InvalidURL:[20,1,1,""]},"fulltext.services.pdf.CanonicalPDF":{Meta:[20,2,1,""],exists:[20,3,1,""],is_available:[20,3,1,""],retrieve:[20,3,1,""]},"fulltext.services.pdf.CanonicalPDF.Meta":{service_name:[20,4,1,""]},"fulltext.services.store":{ConfigurationError:[21,1,1,""],DoesNotExist:[21,1,1,""],Storage:[21,2,1,""],StorageFailed:[21,1,1,""]},"fulltext.services.store.Storage":{create_session:[21,7,1,""],current_session:[21,7,1,""],init_app:[21,7,1,""],is_available:[21,3,1,""],make_paths:[21,8,1,""],retrieve:[21,3,1,""],store:[21,3,1,""]},"fulltext.services.tests":{test_pdf:[23,0,0,"-"]},"fulltext.services.tests.test_pdf":{TestExists:[23,2,1,""],TestRetrieve:[23,2,1,""]},"fulltext.services.tests.test_pdf.TestExists":{setUp:[23,3,1,""],test_pdf_does_not_exist:[23,3,1,""],test_pdf_exists:[23,3,1,""],test_pdf_returns_error:[23,3,1,""]},"fulltext.services.tests.test_pdf.TestRetrieve":{setUp:[23,3,1,""],test_pdf_does_not_exist:[23,3,1,""],test_pdf_exists:[23,3,1,""],test_pdf_never_ready:[23,3,1,""],test_pdf_not_ready:[23,3,1,""],test_pdf_returns_error:[23,3,1,""]},"fulltext.worker":{get_secrets:[24,6,1,""],pull_image:[24,6,1,""],verify_secrets_up_to_date:[24,6,1,""]},fulltext:{agent:[2,0,0,"-"],celery:[6,0,0,"-"],celeryconfig:[7,0,0,"-"],config:[8,0,0,"-"],controllers:[9,0,0,"-"],domain:[10,0,0,"-"],extract:[11,0,0,"-"],factory:[12,0,0,"-"],process:[13,0,0,"-"],routes:[17,0,0,"-"],services:[18,0,0,"-"],worker:[24,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","exception","Python exception"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"],"6":["py","function","Python function"],"7":["py","classmethod","Python class method"],"8":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:class","3":"py:method","4":"py:attribute","5":"py:data","6":"py:function","7":"py:classmethod","8":"py:staticmethod"},terms:{"00012v4":21,"5ygyvtbs29340t2s2nsq4lh00000gp":8,"byte":[3,8],"case":[5,16,23],"class":[3,5,10,12,16,19,20,21,23],"default":[8,9,17,21],"enum":10,"function":17,"int":[3,9],"new":[0,2,3,10,11,14,21,26],"public":[0,26],"return":[3,8,9,10,11,12,14,17,19,20,21,23,24,26],"static":[8,21],"true":[7,8,19,20],"var":8,AWS:8,But:8,CVS:14,Eqs:14,For:[2,8,21],Has:19,TLS:8,The:[0,2,5,7,8,9,10,11,14,16,19,21,26],There:21,These:21,Using:7,With:8,abbrevi:[14,16],abl:26,about:[10,21],accept:17,access:[0,8,19,26],account:8,acknowledg:7,activ:8,actual:[0,21],addit:14,addreess:8,address:8,affect:8,after:0,again:7,age:8,agent:[1,8,21,25],alg:21,all:[5,8,14,16,26],allow:[7,20,26],alongsid:21,alphabet:14,also:[0,8],altern:[8,14],alwai:8,amount:8,ani:[3,8,9,21,24,26],announc:[0,21,26],anyth:21,api:[0,8,9,17,19,20,26],app:[12,21,23],appear:8,appli:16,applic:[0,6,8,12,21,24,26],application_root:8,architectur:26,arg:[3,12,17,24],articl:14,arxitectur:[],arxiv:[0,3,5,8,9,11,14,17,19,20,21],arxivng:8,ascii:[8,14],asdf1234:8,assum:7,asynchron:11,at_timestamp:8,atlassian:8,attach:8,attempt:8,auth:[8,19],auth_updated_session_ref:8,authent:[8,26],author:[9,17,26],automat:[8,26],avail:[0,3,8,12,14,17,19,20,21],await_result:11,aws:8,aws_access_key_id:8,aws_region:8,aws_s3_credenti:8,aws_secret_access_kei:8,backoff:3,bad:[8,14],badmessag:3,badrequest:8,base:[3,5,8,10,11,12,16,19,20,21,23],base_serv:8,baseconsum:3,baseconvert:12,basi:8,batch:3,becom:[3,12],been:7,befor:[3,8,21],behavior:8,being:11,belong:10,below:21,best:17,best_match:17,better:[7,14],bibliographi:14,blueprint:[8,17],bodi:11,bool:[3,10,11,12,17,19,20,21],both:[0,26],broadli:14,brought:21,brows:8,bubbl:8,bucket:[10,21],build:19,bump:8,cach:8,cacheabl:8,call:[3,8],callabl:17,can:[0,7,8,11],cannot:[8,23],canon:[8,20],canonical_endpoint:8,canonical_host:8,canonical_path:8,canonical_port:8,canonical_proto:8,canonical_verifi:8,canonicalpdf:[20,23],car:0,celeri:[0,1,7,24,25],celeryconfig:[1,25],certif:8,chang:[0,8,21],charact:14,check:[0,8,9,12,17,19],checkpoint:8,checksum:19,classifi:19,classmethod:21,clean:14,cleanup:[13,16],client:[0,21],cluster:7,code:[8,21],collect:[10,24],come:8,comment:21,common:[0,14,16],compil:[0,1,8,18],compiler_endpoint:8,compiler_host:8,compiler_path:8,compiler_port:8,compiler_proto:8,compiler_verifi:8,complet:[2,7,10],compon:[12,26],compos:8,config:[1,21,25],configmanag:[],configur:[7,8,19,20,21],configurationerror:21,connect:19,consequ:21,consist:8,consum:[0,1,2,8],contain:[8,16,21,26],content:[0,8,9,10,16,17,21,26],content_fmt:[9,17,21],context:[8,23,26],continu:16,control:[0,1,8,17,25],convers:14,convert:[12,14],cooki:8,copi:10,core:20,corpu:26,cost:8,could:[3,11,21],crash:7,creat:[0,3,10,11,21],create_sess:21,create_task:11,create_web_app:12,create_worker_app:12,crosscut:[],current:[11,17,21],current_sess:21,data:[3,8],date:[3,24],datetim:[8,10],deal:8,debug:8,debugg:8,defin:0,delai:[3,12],deleg:0,deploi:[0,8],describ:[0,7],desir:9,detail:8,determin:[10,17,19,20,21],dev:[],dict:[9,10,19],dictionari:8,differ:7,digit:21,dind:[0,24],directori:21,disabl:8,disallow:20,disappear:7,disk:8,dispatch:7,disposit:21,do_extract:[],doc:[7,8],docker:[0,8],docker_host:8,docsim:14,docstr:8,document:[3,8,10,20,21],doe:[0,8,14,21,23],doesnotexist:[20,21],domain:[1,8,21,25],done:8,downstream:0,duplic:0,dure:[0,7,10],dvi:19,each:[2,3,8,21],east:8,effect:16,either:[8,11],els:21,enabl:8,encapsul:19,encod:[8,21],encount:3,end:10,endpoint:[8,17],enforc:8,ensur:[0,7,8],entir:[8,26],entri:0,ephemer:7,equat:14,error:[8,12],even:7,eventu:0,everi:8,exactli:8,exceed:8,except:[3,8,10,11,12,20,21],execut:[7,8],exist:[0,11,19,20,21,23],exp:14,expand:14,expandword:14,explain:8,explain_template_load:8,explicit:0,explicitli:8,expos:0,extern:[0,8,18],external_url_schem:8,extra:[12,19,20],extract:[0,1,2,3,7,8,9,10,14,16,17,18,19,25],extractor:[0,8,10,11,21,24],extractor_imag:8,extractor_vers:8,factori:[0,1,25],fail:[3,8,10,21],fals:[7,8,9,11,21],fig:14,figur:[8,14],file:[0,8,21],filehandl:[],filenam:[],filesystem:[0,19,21],find:8,first:21,fix:14,flag:8,flask:[0,8,12],folder:8,fookubetoken:8,foovaulthost:8,forc:[0,8,9],form:[14,26],format:[9,14,19,21,26],forward:21,found:8,from:[0,7,8,10,11,14,16,19,20,21,24,26],full:[8,9,11,14,17,26],fulltext:0,fulltextrecordprocessor:3,further:21,gener:[0,2,7,8,10,21],geom:21,get:[0,3,8,11,17,19,20,21],get_secret:24,get_secrets_manag:[],get_send_file_max_ag:8,get_service_statu:19,get_task:11,get_task_statu:9,get_vers:11,give:[8,14],given:17,global:0,goodi:19,greater:8,greek:14,group:14,hairi:8,handl:[0,9,17],handler:[8,12],has:[5,7,16],hash:8,have:[8,16,21,23],head:20,header:[0,8,11,17,19,20],health:17,held:7,help:[0,8],hook:8,host:[8,24],hostnam:8,hour:8,how:8,html:8,http:[0,8],httpintegr:[19,20],httponli:8,hyphen:16,iawait:12,id_typ:[9,11,17],ident:0,identifi:[9,10,11,12,16,17,19,20,21],ignor:14,imag:[0,8,24],implement:0,impli:21,implicitli:8,improv:[8,26],in_progress:10,includ:0,incom:8,increment:8,independ:8,index:[0,3,5,8,26],indexingfail:3,indic:[3,8],individu:3,info:8,inform:[17,21],init_app:21,initi:[5,6,12,21,24],inject:17,instanc:[8,12,21],instead:8,integ:8,integr:[0,3,17,18,19,20,21],intend:0,interfac:20,intern:8,introspect:8,invalid:[20,21],invalidurl:20,ioerror:20,is_avail:[11,12,19,20,21],iso:8,its:0,itself:[0,7,8],jitter:3,json:[8,12,21],json_as_ascii:8,json_sort_kei:8,jsonifi:8,jsonify_except:12,jsonify_mimetyp:8,jsonify_prettyprint_regular:8,just:[14,21],jwt:8,jwt_secret:8,kei:8,keyword:[14,16],kinesi:[0,3],kinesis_checkpoint_volum:8,kinesis_endpoint:8,kinesis_shard_id:8,kinesis_sleep:8,kinesis_start_at:8,kinesis_start_typ:8,kinesis_stream:8,kinesis_verifi:8,know:8,kube_token:8,kwarg:[3,10,11,12,24],last:14,latest:0,latex:19,latter:0,left:14,legaci:21,length:8,less:7,level:[0,8],librari:8,lifetim:8,like:8,likewis:8,line:14,link:8,list:14,listen:0,littl:7,live:[8,21],load:[0,8],local:[8,19],localhost:8,locat:8,log:8,logger:8,logger_handler_polici:8,logger_nam:8,loglevel:8,look:14,lose:7,machin:7,made:[11,20],mai:[0,7,8,21],main:0,make:[0,11,17,24],make_author:17,make_path:21,malform:3,mani:[3,7,8],map:[12,21],mark:14,max:8,max_content_length:8,max_delai:3,max_refs_fract:14,mean:8,mechan:14,messag:8,meta:[19,20,21],meta_onli:21,metadata:[1,10,18],metadatarecordprocessor:5,method:[13,14],methodnam:[5,16,23],might:8,mime:8,minimum_ttl:8,miss:21,mock_client_factori:5,mock_task:5,mock_url_for:5,mode:8,modif:8,modifi:8,modul:[0,1,2,4,13,15,18,22,25,26],monitor:0,month:21,more:[0,7,14],most:[0,26],mount:8,mount_point:8,mountdir:8,move:8,must:[0,26],myapp:[],name:[7,8,19,21],namespac:8,need:23,net:8,network:0,never:8,newlin:14,next:8,nice:8,nnn:21,nnnnn:21,non:[8,11,14,20],none:[3,8,9,11,12,17,19,21,24],nope:8,normal:14,normalize_text_psv:14,nosuchtask:11,note:8,notif:[0,2,3,21],number:[8,14,16],numer:21,object:[8,12,14,19,20,21],obtain:[0,19],occupi:8,occur:26,occurr:14,old:21,one:[5,7],onli:[0,5,7,8,14,26],oper:8,option:[17,19],orchestr:0,order:[8,21],org:8,organ:0,origin:8,other:[0,8,19],otherwis:[3,20],our:[7,26],out:[3,8],output:8,over:26,overlap:14,overrid:8,overwritten:8,owner:[0,10,11,19],ownership:0,packag:[25,26],page:26,paper:[0,2,3,5,11,17,20,26],paramet:[3,9,11,14,19,20,21],part:[0,14],partition_kei:3,pass:[3,20,23],path:[8,19,20,21],pdf2txt:14,pdf:[0,1,8,11,14,16,18,19,21,23],pdf_url:11,pdfisavail:[2,3,8],per:8,perform:[0,2,8],perl:14,perman:8,permanent_session_lifetim:8,placehold:[0,10],plain:[0,7,8,9,14,16,17,21,26],plaintext:[0,8],point:0,polici:8,pop:8,port:8,possibl:26,post:0,predic:12,preferred_url_schem:8,preserve_context_on_except:8,pretti:[7,8],prevent:[0,7],primarili:0,print:[0,8,9,21,26],privileg:0,problem:20,procedur:16,process:[0,1,7,8,25,26],process_record:3,process_text:14,processor:3,product:[8,10,19],prof:14,propag:8,propagate_except:8,protect:0,protocol:[8,12],provid:[0,3,8,9,11,12,13,14,17,20,21,26],psv:[1,13,16,21,26],publish:[0,9,20],pull:24,pull_imag:24,purpos:7,python:8,qualifi:8,queue:[0,7,8],rais:[3,8,10,20],raw:[14,16,26],reach:3,read:0,readi:[],recent:[0,26],recommend:8,record:[3,8,21],recoveri:3,redi:[0,7,8],redis_endpoint:8,ref:14,refer:14,reflect:21,refresh:8,regex:12,region:8,regist:12,register_error_handl:12,regular:8,reject:8,reload:8,remain:21,remov:[14,16],render:[12,23],replac:14,repres:8,represent:10,request:[0,8,9,11,17,20,21,26],requir:[0,20,21,24],research:26,resourc:[0,9,10,17,19,20],resource_id:17,respect:[0,8],respons:[2,8,12,17,19,21],result:[0,8],retriev:[0,8,9,14,17,19,20,21,23],riski:8,role:8,root:8,rout:[0,1,12,25],run:[0,7,8,10],runtest:[5,16,23],runtim:7,runtimeerror:[3,11,20,21],same:7,scheme:8,scope:[0,17],search:[5,26],second:8,secret:[3,8,24],secret_kei:8,sect:14,section:14,secur:8,see:[7,8,21],seed:8,send_fil:8,send_file_max_age_default:8,send_static_fil:8,sender:11,sendfil:8,sent:[8,11],sentenc:14,separ:[0,14,21],sequence_numb:3,serial:8,server:8,server_nam:8,servic:[0,1,8,9,10,12,25],service_nam:[19,20],service_statu:9,session:[8,23],session_cookie_domain:8,session_cookie_httponli:8,session_cookie_nam:8,session_cookie_path:8,session_cookie_secur:8,session_refresh_each_request:8,set:[8,11,21],setup:[5,23],shard:8,should:[7,8,14,21,26],side:0,sign:8,simeon:14,simpler:14,sinc:[8,26],singl:14,situat:8,sleep:[3,20],sleep_after_credenti:3,sock:8,socket:8,softwar:21,solid:7,some:[16,23],sourc:[3,5,8,9,10,11,12,14,16,17,19,20,21,23,24],source_id:19,special:[0,8],specif:8,split_on_refer:14,ssl:8,stack:8,start:[3,8,10,11,14,23],start_extract:[9,17],startup:8,state:[7,10,11,21],statu:[0,8,9,10,11,17,19,23],still:23,storag:[8,21],storage_volum:8,storagefail:21,store:[0,1,8,18,20],str:[3,9,11,14,17,19,20],stream:[0,2,3,8],streamnotavail:3,string:[8,14],structur:8,style:21,sub_sequence_numb:3,subdomain:8,submiss:[0,11,12,19,21,26],submissionsourceconvert:12,submodul:[25,26],subpackag:[25,26],subscrib:8,subsequ:3,succee:21,succeed:10,support:[0,21,26],supportedbucket:21,supportedformat:21,symbol:[14,16],system:[0,21],take:7,taken:21,talk:8,target:20,task:[0,2,3,7,8,10,11,17,21],task_acks_l:7,task_always_eag:7,task_default_queu:7,task_id:[10,11],task_statu:17,taskcreationfail:11,tcp:8,tell:11,templat:8,templates_auto_reload:8,temporari:20,termin:21,test:[1,2,7,8,13,18],test_expand_word:16,test_notifi:5,test_pdf:[1,18,22],test_pdf_does_not_exist:23,test_pdf_exist:23,test_pdf_never_readi:23,test_pdf_not_readi:23,test_pdf_returns_error:23,test_process_psv:[1,13,15],test_record_processor:[1,2,4],test_remove_whitespace_is_idempot:16,test_text_has_continu:16,test_text_has_numb:16,test_text_has_symbol:16,test_text_has_unwanted_keyword:16,test_tidy_text:16,test_to_psv:16,test_whitespace_all_over_the_plac:16,testcas:[5,16,23],testconverttopsv:16,testconverttopsvunit:16,testexist:23,testindexpap:5,testretriev:23,text:[0,7,8,9,11,13,14,16,17,19,21,26],than:[7,8,14],thei:8,therefor:21,thi:[0,7,8,9,10,14,19,21],those:8,though:7,through:8,throughput:8,tidy_txt_from_pdf:14,tidytext:14,time:[7,8,21,26],timedelta:8,timestamp:8,tmp:8,tmpb40hamhl:[],tmpen6_j61a:8,to_dict:10,token:[8,9,11,19,26],too:3,traceback:8,transform:14,transport:[7,8],trap_bad_request_error:8,trap_http_except:8,trash:8,treat:[7,8],tri:3,tupl:[3,9,10,14,19],two:[0,21],txt:14,type:[3,8,9,10,11,12,14,17,19,20,21,24],typic:14,typing_extens:12,underli:7,unexpect:23,unicod:8,uniqu:11,unit:5,unittest:[5,16,23],unix:8,unlik:3,until:7,unwant:16,updat:[3,10,21],update_secret:3,update_sent_st:11,upload:19,upstream:8,url:[8,11,20,23],url_for:8,use:[8,26],use_x_sendfil:8,used:[0,7,8],useful:[7,8],user:[0,19],uses:0,using:[0,8,14,21],usual:[9,11,14],utf:[8,21],util:14,valid:8,valu:[8,10],valueerror:20,variabl:8,varieti:16,vault:[8,24],vault_cert:8,vault_en:8,vault_host:8,vault_port:8,vault_request:8,vault_rol:8,vault_schem:8,verbos:8,veri:8,verif:8,verifi:[11,19,20,24],verify_secrets_up_to_d:24,verison:19,version:[0,1,5,8,9,10,11,17,18,19,26],via:0,view:0,volum:[8,21],wai:[3,8],wait:[3,8,12],wait_for:12,wait_for_servic:8,wait_for_stream:3,wait_on_startup:8,want:7,warn:7,web:[0,8,12],well:[21,26],were:21,werkzeug:[8,12],when:[0,3,8,10,20],whenc:0,whenev:26,where:[0,8,19,21],wherea:0,whether:[8,10,11,12,19,20,21],which:[0,8,10,11,14,19,20,21],whitespac:[14,16],whole:8,why:8,without:7,word:14,work:0,workdir:8,worker:[0,1,2,7,8,12,25],worker_prefetch_multipli:7,workflow:[0,26],workspac:19,would:21,write:[8,21],wrong:8,xml:[],xmlhttprequest:8,year:21,you:8,yuck:16},titles:["Architecture","fulltext package","fulltext.agent package","fulltext.agent.consumer module","fulltext.agent.tests package","fulltext.agent.tests.test_record_processor module","fulltext.celery module","fulltext.celeryconfig module","fulltext.config module","fulltext.controllers module","fulltext.domain module","fulltext.extract module","fulltext.factory module","fulltext.process package","fulltext.process.psv module","fulltext.process.tests package","fulltext.process.tests.test_process_psv module","fulltext.routes module","fulltext.services package","fulltext.services.compiler module","fulltext.services.pdf module","fulltext.services.store module","fulltext.services.tests package","fulltext.services.tests.test_pdf module","fulltext.worker module","fulltext","arXiv Fulltext Extraction Service"],titleterms:{agent:[2,3,4,5],architectur:0,arxiv:26,authent:0,author:0,celeri:6,celeryconfig:7,compil:19,compon:0,config:8,consum:3,contain:0,context:0,control:9,domain:10,extract:[11,21,26],factori:12,fulltext:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],indic:26,metadata:21,modul:[3,5,6,7,8,9,10,11,12,14,16,17,19,20,21,23,24],object:26,packag:[1,2,4,13,15,18,22],pdf:20,process:[13,14,15,16],psv:14,requir:26,rout:17,servic:[18,19,20,21,22,23,26],store:21,submodul:[1,2,4,13,15,18,22],subpackag:[1,2,13,18],tabl:26,test:[4,5,15,16,22,23],test_pdf:23,test_process_psv:16,test_record_processor:5,version:21,worker:24}})