export var ApiService = {

  // AWS Server
  base_url : 'http://3.110.14.3/budget_app_pwa/',
  service_url: 'http://3.110.14.3/budget_app_pwa/server/public/api/',
  get_image_Url:'http://3.110.14.3/budget_app_pwa/server/public/assets/uploads/',
  siteURL: 'http://3.110.14.3/budget_app_pwa/server/',

  // Test Server
  // base_url : 'http://budget.hostappshere.co.in/',
  // service_url: 'http://budget.hostappshere.co.in/server/public/api/',
  // get_image_Url:'http://budget.hostappshere.co.in/server/public/assets/uploads/',
  // siteURL: 'http://budget.hostappshere.co.in/server/',

  // development server
    // base_url : 'https://www.CreateYourBudget.com/',
    // service_url: 'http://localhost/CreateYourBudget/server/public/api/',
    // get_image_Url:'http://localhost/CreateYourBudget/server/public/assets/uploads/',
    // siteURL: 'http://localhost/CreateYourBudget/server/',

      // development server
      // base_url : 'http://192.168.29.53/github/budget_app_pwa/server/public',
      // service_url: 'http://192.168.29.53/github/budget_app_pwa/server/public/api/',
      // get_image_Url:'http://192.168.29.53/github/budget_app_pwa/server/public/assets/uploads/',
      // get_video_Url:'http://192.168.29.53/github/budget_app_pwa/server/public/server/public/storage/video/',
      // siteURL: 'http://192.168.29.53/github/budget_app_pwa/server/',

    admin_contact :'admin/touch_us_datatable',
    Admin_Login: 'adminlogin',
    Get_Dashboard:'get_dashboard',
    Parameter_Type_ChangeStatus: 'parametertype_changestatus',
    Parameter_Type_Datatable: 'parameter_type_datatable',
    AddorUpdate_Parameter_Type: 'actionparametertype',
    Delete_Parameter_Type: 'deleteparametertype',
    Get_Parameter_Type: 'get_parameter_type',
    Change_Password:'change_password',
    Parameter_Value_ChangeStatus: 'parametervalue_changestatus',
    Parameter_Value_Datatable: 'parameter_value_datatable',
    AddorUpdate_Parameter_Value: 'actionparametervalue',
    Delete_Parameter_Value: 'deleteparametervalue',
    Plan_Datatable:'plan_datatable',
    Plan_ChangeStatus: 'plan_changestatus',
    Delete_Plan: 'deleteplan',
    AddorUpdate_Plan:'actionplan',
    Get_Permission:'get_permission',
    Add_Permission:'add_permission',
    Get_Plan_Features:'get_plan_features',
    Save_PlanFeatures:'save_planfeatures',
    Delete_PlanFeatures:'delete_planfeatures',
    Get_Plan:'get_plan',
    User_Datatable:'user_datatable',
    User_ChangeStatus: 'user_changestatus',
    Revenue_Datatable:'revenue_datatable',
    Revenue_ChangeStatus: 'revenue_changestatus',
    Notification_Datatable:'notification_datatable',
    Arts_Datatable:'arts_datatable',
    notificationCounts:'notification_counts',
    NotificationList:'notificationlist',
    Get_UserDocument:'get_userdocument',
    Learn_Datatable:'learn_datatable',
    AddorUpdate_Learn: 'actionlearn',
    Learn_ChangeStatus: 'learn_changestatus',
    Get_LearnVideo:'get_learnvideo',
    Delete_Learn: 'deletelearn',
    UploadVideo:'uploadvideo',
    Learn_Library_Datatable:'learn_video_datatable',
    Delete_Learn_Video:'deletelearnvideo',
    Get_Category: 'get_category',
    Delete_SubCategory:'deletesubcategory',
    AddorUpdate_SubCategory:'actionsubcategory',
    SubCategory_Datatable:'subcategory_datatable',
    Sub_Category_ChangeStatus: 'subcategory_changestatus',
    Get_Step:"admin/progress_panel",
    AddStep:"admin/store/progress/panel",
    UpdateStep:"admin/update/progress/panel",
    DeleteStep:"admin/delete/progress/panel",
    Step_ChangeStatus:"admin/status/progress/panel",


    User_Login: 'signin',
    User_SignUp:'register',
    Verify_Email:'chkemailverify',
    Check_ForgotEmail:'checkforgotemail',
    Reset_Password:'reset',


    setBudget:'setbudget',
    add_ExpenseGroup:'add_expensegroup',
    confirmDeleteItem:'delete_item',
    addBudgetItems:'addbudgetitems',
    updateItemValues:'updateitemvalues',
    getTransaction:'gettransaction',
    updateTrnStatus:'updatetrnstatus',
    updateSubNote:'updatesubnote',
    AddTransactions:'addtransactions',
    select2TrnList:'select2trnlist',
    getlearnVideo :'user/get_learn_video',
    user_contact : 'user/touch_us_store',
    user_profile : 'user/profile_list',
    user_profile_update : 'user/profile_update',
    user_change_password :'user/change_password',
    delete_account  : 'user/profile_account_delete',

    // Insight
    getInsightChartData : 'user/insights',
    getMonthlyIncomeData :'user/income_group_wise_details',
    getSubExpenseData:'user/expense_category_wise_details',
    addSelectedMonthBudget :'user/add_planning_budget_month',
    
    // Progress Panel
    getStepData:"user/progress_panel",
    updateStep1videoStatus:"user/progress_panel_watch_video_step_update",
    
    //Plan
    getPlanList :'user/get_plan',
    subscribePlan :'user/stripe_bill_generate',

    // payment API
    payment_detail : 'user/subscribe_response' ,
    payment_process :'user/subscribe_process',
    payment_cancle : 'user/subscribe_cancel',
    payment_list : 'user/plan_trasactionn_list',
    transacation_detail : 'user/select_txn_list'
};

