package com.ssafy.townbook.model.service;

import com.ssafy.townbook.model.dto.AccountDto;
import com.ssafy.townbook.model.entity.Account;

public interface AccountService {
    AccountDto signup(AccountDto accountDto);

    AccountDto getUserWithAuthorities(String accountId);

    AccountDto getMyUserWithAuthorities();

    String findEmail(String accountPhoneNumber);

    Boolean accountModify(AccountDto accountDto);

    Boolean accountRemove(String accountEmail, String accountPw);

    Boolean updatePassword(String accountEmail, String tmpPassword);
}
