
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../../_helper/confirm-dialog/confirm-dialog.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';

declare var $: any;
import * as jQuery from 'jquery';
@Component({
  selector: 'app-budget',
  styleUrls: [
    './budget.component.scss',
    '../../../assets/front/css/front-style.css',
    '../../../assets/front/css/reset.min.css',
    '../../../assets/front/css/react-datepicker.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './budget.component.html',
})
export class BudgetComponent implements OnInit {
  itemdata: any;
  result: any;
  grand_budget: any;
  total_income_planned: any;
  total_income_received: any;
  BudgetArray: any;
  expense_sub_id: any;
  income_id: any;
  total_expense_spent: any;
  total_balance: any;
  currentDate: any;
  datetime: Date;
  budgetResponse: boolean = false;
  isSplit: boolean = false;
  budgetTransaction: any;
  selectTrnListData: any;
  select2TrnList: any;
  original_status: any;
  transactionType: any;
  total_expense_limit: any;
  addEditTitle: any;
  deleteLabel: 'Label';
  expense_name: any;
  splitTransaction = [];
  totalSplitAmount = '0.00';
  monthChange: boolean = false;
  currentMonth: any;
  monthlyOverviewData: any = [];
  color: any = ['#48ce65', '#b34fa0', '#16a597', '#f26552', '#e3b409',
    '#35bd59', '#634fb3', '#00b2f6', '#e64b40', '#faab19',
    '#48ce65', '#00b2f6', '#e64b40', '#faab19', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC'];

  // chart options
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  animations: boolean = true;
  // legendPosition: string = "below";
  // legendTitle: string = "";

  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.BudgetArray.Expense, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    const component = this;
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));

    document.addEventListener("click", (evt) => {
      const flyoutElement = document.getElementsByClassName("income-retailer");
      let targetElement = evt.target; // clicked element
    });
    this.datetime = new Date();
    this.currentDate = this.datetime.getFullYear() + "-" + (this.datetime.getMonth() + 1) + "-" + this.datetime.getDate();
    $('#currentDate').val(this.currentDate);
    this.setBudget();
    // this.selectTrnList();

    $(document).ready(function () {
      var dp = $("#date").datepicker({
        format: "MM yyyy", startView: "months", minViewMode: "months", onClose: function (dateText, inst) {
          $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
      });

      $("#show-date").click(function () {
        $("#date").datepicker("show");
        $("#show-date i").removeClass("fa fa-chevron-down");
        $("#show-date i").addClass("fa fa-chevron-up");
      });

      dp.on('changeMonth', function (e) {
        $("#show-date i").removeClass("fa fa-chevron-up");
        $("#show-date i").addClass("fa fa-chevron-down");
        $(this).datepicker('hide');
        component.changeMonthAndYear(e.date)
      });

      $('body').removeClass('sidebar-mini mat-typography');

      /* --------------------- Popup_Inner_Tabbing ---------------------- */
      $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        component.transactionType = tab_id == "tab-1" ? "expense" : "income";
        component.select2TrnList = (tab_id == "tab-1" ? component.selectTrnListData.expense : component.selectTrnListData.income);
        $('.modal_amount').val('PLN 0.00');
        $(".modal_subcategory").val('');
        component.splitTransaction = [];
        component.isSplit = false;
        component.totalSplitAmount = '0.00';
        trnId = [];
      });

      /* ------------- Arcodian ------------------ */
      $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).siblings(".content").slideUp(200);
          $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
          $(".set > a span").text("More Options")
        } else {
          $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
          $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
          $(".set > a span").text("Fewer Options")
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this).siblings(".content").slideDown(200);
        }
      });

    });
    //Out Click
    $(document).on("click", function (event) {
      if (!$(event.target).closest(".multi-field").length) {
        $('.multi-field').removeClass('current');
        // $(".tab-pane").removeClass('active');
      }
    });

    $('.modalClose').on('click', function (e) {
      e.preventDefault();
      $('.modal').removeClass('is-visible');
      trnId = [];
      component.totalSplitAmount = '0.00';
      component.splitTransaction = [];
    });

    // Emtt search box
    $(".emty").click(function () {
      $(".search").val("");
      $(this).fadeOut().removeClass("hide");
      $("li").show();
    });

    //search
    $(".search").keyup(function () {
      var val = $(this).val().toLowerCase();
      if (0 < val.length) {
        $(".header").addClass("hide");
        $(".emty").fadeIn();
      } else {
        $(".header").removeClass("hide");
        $(".emty").fadeOut();
      }
      $("li").each(function () {
        var text = $(this).text();
        if (text.indexOf(val) == -1) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    });
    /* ------------- Tabbing ------------------ */
    $(".nav-tabs li.nav-item a.nav-link").click(function () {
      $(".nav-tabs li.nav-item a.nav-link").removeClass('active');
    });

    $(".nav-tabbing li.nav-items a.nav-links").click(function () {
      $(".nav-tabbing li.nav-items a.nav-links").removeClass('active');
    });

    /* -------------------- Navebar_Active -------------------------- */
    var selector = '.navmenu li a,.tabbing li a';

    $(selector).on('click', function () {
      $(selector).removeClass('active');
      $(this).addClass('active');
    });

    var trnId = [];
    $(".modal_subcategory").on("change", function () {
      if (trnId.includes(this.value) == false) {
        trnId.push(this.value);
        var optionsText = this.options[this.selectedIndex].text;
        var subExpenseId = this.value != '' ? this.value.split('_')[1] : 0
        component.AddSplitTransaction(optionsText, subExpenseId);
      }
    });
  }

  changeMonthAndYear(month) {
    this.datetime = new Date(month);
    this.currentDate = this.datetime.getFullYear() + "-" + (this.datetime.getMonth() + 1) + "-" + this.datetime.getDate();
    $('#currentDate').val(this.currentDate);
    this.monthChange = true;
    this.setBudget();
  }

  closeTransactionTab() {
    $(".tab-pane").removeClass('active');
  }

  removeSplitTransaction(i) {
    this.splitTransaction.splice(i, 1);
  }

  openExpenseTransactionTab(id, type) {
    $(".tab-pane").removeClass('active');
    if (type == 'income') {
      $("#income_" + id).tab('show');
    } else if (type == 'expense') {
      $("#expense_" + id).tab('show');
    }
  }

  AddSplitTransaction(optionsText, subId) {
    this.isSplit = true;
    $('.modal_expense_btn').html('Track Expense');
    $('.modal_income_btn').html('Track Income');
    this.splitTransaction.push({
      subCategoryId: subId,
      subCategoryName: optionsText,
      amount: ''
    });
    $(".modal_subcategory").val('');
    this.totalSplitAmount = this.calculateTrasactionTotal();
  }

  calculateTrasactionTotal() {
    var total = 0.00;
    for (var i = 0; i < this.splitTransaction.length; i++) {
      total = total + (this.splitTransaction[i].amount == '' ? 0.00 : parseFloat(this.splitTransaction[i].amount.replace('PLN ', '')));
    }
    var modalTab = (this.transactionType == 'income' ? "#tab-2" : "#tab-1");
    var modal_amount = $(modalTab).find('.modal_amount').val().replace('PLN ', '');
    total = parseFloat(modal_amount) - total;
    return total.toFixed(2).toString();
  }

  OpenTransactionModal(obj, type, action) {
    this.splitTransaction = [];
    const component = this;
    this.transactionType = type;
    component.original_status = 2;
    // if (!obj) {
    //   component.original_status = 1;
    // }
    var modalTab = (type == 'income' ? "#tab-2" : "#tab-1");
    if (type == "") {
      this.transactionType = modalTab == '#tab-1' ? 'expense' : 'income'
    }
    $('.sub_category_id').val(0);
    $('.transaction_id').val(0);
    $('.modal_amount').val('PLN 0.00');
    $('.modal_date').val('');
    $('.modal_title').val('');
    $('.modal_check').val('');
    $('.modal_note').val('');
    $('.income_expense_modal').addClass('is-visible');
    $('.income_expense_modal .tab-content').removeClass('current');
    $('.income_expense_modal .tab-link').removeClass('current');
    $(function () {
      $(modalTab).find('.modal_amount').focus();
    });
    if (type == 'income') {
      $('.income_expense_modal .tab-income').addClass('current');
      $('.income_expense_modal #tab-2').addClass('current');
    } else if (type == 'expense') {
      $('.income_expense_modal .tab-expense').addClass('current');
      $('.income_expense_modal #tab-1').addClass('current');
    } else {
      $('.income_expense_modal .tab-expense').addClass('current');
      $('.income_expense_modal #tab-1').addClass('current');
      $('.modal_expense_btn').html('Add New Expense');
      $('.modal_income_btn').html('Add New Income');
    }
    if (action == 'edit') {
      this.addEditTitle = 'Edit'
    }
    else {
      this.addEditTitle = 'Add New'
    }
    if (action == 'add') {
      const date = new Date();
      const initialDateISO = date.toISOString().slice(0, date.toISOString().indexOf('T'));
      $(modalTab).find('.modal_date').val(initialDateISO);
      if (type == 'income') {
        $(modalTab).find('.modal_title').val(obj.income_name);
        $('.sub_category_id').val(obj.income_id);
        $('.transaction_id').val(obj.id);
      } else if (type == 'expense') {
        $(modalTab).find('.modal_title').val(obj.sub_category);
        $('.sub_category_id').val(obj.expense_sub_id);
        $('.transaction_id').val(obj.id);
      }
    } else if (action == 'edit') {
      if (type == 'income') {
        $('.sub_category_id').val(obj.income_id);
        $('.transaction_id').val(obj.id);
        this.splitTransaction.push({
          subCategoryId: obj.income_id,
          subCategoryName: obj.sub_category,
          amount: ('PLN ' + obj.amount)
        })
      } else if (type == 'expense') {
        $('.sub_category_id').val(obj.expense_sub_id);
        $('.transaction_id').val(obj.id);
        this.splitTransaction.push({
          subCategoryId: obj.expense_sub_id,
          subCategoryName: obj.sub_category,
          amount: ('PLN ' + obj.amount)
        })
      }
      $(modalTab).find('.modal_amount').val('PLN ' + obj.amount);
      $(modalTab).find('.modal_date').val(obj.date_time);
      $(modalTab).find('.modal_title').val(obj.title);
      $(modalTab).find('.modal_check').val(obj.transaction_check);
      $(modalTab).find('.modal_note').val(obj.transaction_note);
      $(modalTab).find(".modal_subcategory").val('');

      if (obj.sub_category == null) {
        component.original_status = 3;
      }
    }

    if (!obj) {
      $('.modal_expense_btn').html('Add New Expense');
      $('.modal_income_btn').html('Add New Income');
    } else if (component.original_status == 3) {
      $('.modal_expense_btn').html('Track Expense');
      $('.modal_income_btn').html('Track Income');
    } else {
      component.original_status = 1;
      $('.modal_expense_btn').html('Save Changes');
      $('.modal_income_btn').html('Save Changes');
    }
    $('.original_status').val(component.original_status);
    this.selectTrnList();
  }

  AddTransactions(type) {
    this.transactionType = type;
    var modalTab = (type == 'income' ? "#tab-2" : "#tab-1");

    var original_status = $('.original_status').val();
    var modal_amount = $(modalTab).find('.modal_amount').val().replace('PLN ', '');
    var modal_date = $(modalTab).find('.modal_date').val();
    var modal_title = $(modalTab).find('.modal_title').val();
    var modal_check = $(modalTab).find('.modal_check').val();
    var modal_note = $(modalTab).find('.modal_note').val();

    $(modalTab).find('.form-control').removeClass('input-error');
    if (modal_amount == '0.00') {
      $(modalTab).find('.modal_amount').focus();
      $(modalTab).find('.modal_amount').addClass('input-error');
      return false;
    } else if (!modal_date) {
      $(modalTab).find('.modal_date').focus();
      $(modalTab).find('.modal_date').addClass('input-error');
      return false;
    }
    // else if (!modal_title) {
    //   $(modalTab).find('.modal_title').focus();
    //   $(modalTab).find('.modal_title').addClass('input-error');
    //   return false;
    // }
    var transactionData = [];
    var transaction_id = $('.transaction_id').val();

    if (this.isSplit == true) {
      if (this.splitTransaction.length == 0) {
        this.alert.showAlerts("Error", "Please choose budget item", "error");
        return
      }
      else if (this.splitTransaction.length == 1) {
        transactionData.push({
          sub_category_id: this.splitTransaction[0].subCategoryId,
          transaction_id: transaction_id,
          amount: modal_amount,
        })
      }
      else {
        this.splitTransaction.forEach(i => {
          transactionData.push({
            sub_category_id: i.subCategoryId,
            transaction_id: transaction_id,
            amount: i.amount.replace('PLN ', ''),
          })
        });
      }

    }
    else {
      if (this.isSplit == false && this.splitTransaction.length > 0) {
        if (this.splitTransaction.length == 1) {
          transactionData.push({
            sub_category_id: this.splitTransaction[0].subCategoryId,
            transaction_id: transaction_id,
            amount: modal_amount,
          })
        }
        else {
          this.splitTransaction.forEach(i => {
            transactionData.push({
              sub_category_id: i.subCategoryId,
              transaction_id: transaction_id,
              amount: i.amount.replace('PLN ', ''),
            })
          });
        }
      }
      else {
        this.alert.showAlerts("Error", "Please choose budget item", "error");
        return
      }
    }

    var link = ApiService.service_url + ApiService.AddTransactions;
    var form = new FormData();
    var isSplitData = (this.isSplit == true ? "true" : "false");

    form.append('transactionData', JSON.stringify(transactionData));
    form.append('original_status', original_status);
    form.append('isSplit', isSplitData);
    form.append('transactionType', this.transactionType);
    form.append('amount', modal_amount);
    form.append('title', modal_title);
    form.append('transaction_check', modal_check);
    form.append('transaction_note', modal_note);
    form.append('original_status', original_status);
    form.append('modal_date', modal_date);
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          this.getTransaction();
          this.setBudget();
          $('.income_expense_modal').removeClass('is-visible');
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.budgetResponse = false;
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  updateTrnStatus(id, trnType, original_status, status) {
    var link = ApiService.service_url + ApiService.updateTrnStatus;
    var form = new FormData();
    form.append('id', id);
    form.append('trnType', trnType);
    form.append('status', status);
    form.append('original_status', original_status);
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          this.getTransaction();
          this.setBudget();
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.budgetResponse = false;
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );

  }

  selectTrnList() {
    var link = ApiService.service_url + ApiService.select2TrnList;
    var form = new FormData();
    form.append('currentDate', $("#currentDate").val());
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.selectTrnListData = this.result.data;
          this.select2TrnList = (this.transactionType == 'expense' ? this.result.data.expense : this.result.data.income);
          $('.modal_subcategory').select2({
            width: '100%',
          });
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.budgetResponse = false;
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  getTransaction() {
    var link = ApiService.service_url + ApiService.getTransaction;
    var form = new FormData();
    console.log($("#currentDate").val());
    form.append('currentDate', $("#currentDate").val());
    form.append('searchData', $(".trn_search").val());
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          this.budgetTransaction = response;
        } else if (this.result.success == false) {
        }
      },
      err => {
        this.budgetResponse = false;
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  setBudget() {
    var link = ApiService.service_url + ApiService.setBudget;
    var form = new FormData();
    console.log($("#currentDate").val());
    form.append('currentDate', $("#currentDate").val());
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.budgetResponse = true;
          var response = this.result.data;
          this.monthChange = false
          this.grand_budget = response.grand_budget;
          this.total_income_planned = response.total_income_planned;
          this.total_income_received = response.total_income_received;
          this.total_expense_spent = response.total_expense_spent;
          this.total_expense_limit = response.total_expense_limit;
          this.total_balance = response.total_balance;
          this.BudgetArray = response.response;
          this.monthlyOverviewData = [{
            "name": "Income",
            "value": response.total_income_received
          },
          {
            "name": "Expense",
            "value": response.total_expense_spent
          },
          {
            "name": "Balance",
            "value": response.total_balance
          }];
          setTimeout(function () {
          }, 100);

        } else if (this.result.success == false) {
          this.budgetResponse = false;
          if (this.result.data.length == 0) {
            this.monthChange = true;
          }
        }
      },
      err => {
        this.budgetResponse = false;
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );

  }

  addSelectedMonthBudget() {
    this.loader.showLoader();
    var link = ApiService.service_url + ApiService.addSelectedMonthBudget;
    var form = new FormData();
    var currentNewDate = new Date(this.currentDate);
    this.currentMonth = (currentNewDate.getMonth() + 1);
    form.append('currentmonth', this.currentMonth);
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          this.setBudget();
          // this.selectTrnList();
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
    console.log("added new momnth data");
  }

  add_ExpenseGroup() {
    this.loader.showLoader();
    var link = ApiService.service_url + ApiService.add_ExpenseGroup;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          this.setBudget();
          // this.selectTrnList();
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  confirmDeleteItem(type) {
    this.loader.showLoader();
    var link = ApiService.service_url + ApiService.confirmDeleteItem;
    var form = new FormData();
    if (type == 'income') {
      form.append('id', this.income_id);
    } else if (type == 'expense') {
      form.append('id', this.expense_sub_id);
    }
    form.append('type', type);
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          $('.modal').removeClass('is-visible');
          this.setBudget();
          // this.selectTrnList();
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  removeExpenseItems(expense_sub_id, expense_sub_name, expense_name) {
    this.expense_sub_id = expense_sub_id;
    this.deleteLabel = expense_sub_name;
    this.expense_name = expense_name;
    $('.delete_model').addClass('is-visible');
  }

  removeIncomeItems(income_id, income_name) {
    this.income_id = income_id;
    $('.msg-heading').html('Delete ' + income_name);
    $('.msg-title').html('Are you sure you want to delete ' + income_name + '?');
    $('.delete_income_model').addClass('is-visible');
  }

  addItems(type, ids) {
    this.loader.showLoader();
    var link = ApiService.service_url + ApiService.addBudgetItems;
    var form = new FormData();
    form.append('type', type);
    form.append('id', ids);
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          this.setBudget();
          // this.selectTrnList();
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  updateItemValues(type, obj) {
    var link = ApiService.service_url + ApiService.updateItemValues;
    var form = new FormData();
    form.append('type', type);
    form.append('id', obj.id);
    form.append('value', obj.value);
    form.append('amount', obj.amount);
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
          this.setBudget();
          this.alert.showAlerts("", "Data updated successfully", "success");
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  txtFocus(evt) {
    $('.readOnlytxt').prop('readonly', true);
    $('.multi-field').removeClass('current');
    $(evt).closest('.multi-field').addClass('current');
    $(evt).prop('readonly', false);
    $(evt).select();
  }

  updateSubNote(id, evt, type) {
    var value = $(evt).val();
    var link = ApiService.service_url + ApiService.updateSubNote;
    var form = new FormData();
    form.append('id', id);
    form.append('value', value);
    form.append('type', type);
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.result = res;
        if (this.result.success == true) {
          var response = this.result.data;
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  txtFocusOut(evt, obj, type) {
    var value = $(evt).val().replace('PLN ', '');
    var arrVal;
    if (type == 'income') {
      arrVal = {
        'id': obj.income_id,
        'amount': obj.planned,
        'value': value,
      };
    } else if (type == 'expense') {
      arrVal = {
        'id': obj.expense_sub_id,
        'amount': obj.limit,
        'value': value,
      };
    } else if (type == 'expenseCategory') {
      arrVal = {
        'id': obj.expense_id,
        'amount': '0',
        'value': value,
      };

    }
    this.updateItemValues(type, arrVal);
  }

  txtMoneyFocusOut(evt, obj, type) {
    var amount = $(evt).val().replace('PLN ', '');
    $(evt).val('PLN ' + amount);
    if (amount == '') { $(evt).val('PLN 0.00'); }
    var arrVal;
    if (type == 'income') {
      arrVal = {
        'id': obj.income_id,
        'amount': amount,
        'value': obj.income_name,
      };
    } else if (type == 'expense') {
      arrVal = {
        'id': obj.expense_sub_id,
        'amount': amount,
        'value': obj.sub_expense_name,
      };
    }
    this.updateItemValues(type, arrVal);
  }

  txtMoneyFocusOut1(evt) {
    var amount = $(evt).val().replace('PLN ', '');
    $(evt).val('PLN ' + amount);
    if (amount == '') { $(evt).val('PLN 0.00'); }
    this.totalSplitAmount = this.calculateTrasactionTotal();
  }

  txtSplitTransactionAmount(evt) {
    var amount = $(evt).val().replace('PLN ', '');
    $(evt).val('PLN ' + Number.parseFloat(amount).toFixed(2));
    if (amount == '') { $(evt).val('PLN 0.00'); }
    this.totalSplitAmount = this.calculateTrasactionTotal()
  }
}
