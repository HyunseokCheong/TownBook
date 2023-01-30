package com.ssafy.townbook.controller;

import com.ssafy.townbook.model.service.LockerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locker")
@RequiredArgsConstructor
public class LockerController {
    
    private LockerService lockerService;
    
    @Autowired
    public LockerController(LockerService lockerService) {
        this.lockerService = lockerService;
    }
    
    /**
     * 전체 보관함 및 보관함에 할당된 세부 보관함 조회
     * 보관함 DTO로 변환하여 반환
     *
     * @return List
     */
    @GetMapping("")
    public ResponseEntity<?> lockers() {
        return new ResponseEntity<>(lockerService.findAll(), HttpStatus.OK);
    }
    
    /**
     * 단일 보관함 및 보관함에 할당된 세부 보관함 조회
     * 보관함 DTO로 변환하여 반환
     *
     * @param lockerNo
     * @return LockerDto
     */
    @GetMapping("/{lockerNo}")
    public ResponseEntity<?> findLockerByLockerNo(@PathVariable Long lockerNo) {
        return new ResponseEntity<>(lockerService.findLockerByLockerNo(lockerNo), HttpStatus.OK);
    }
    
    /**
     * 보관함 및 세부 보관함을 생성한다.
     * 보관함 이름, 세부 보관함 개수 PathVariable
     *
     * @param lockerRegion
     * @param detailLockerCount
     * @return LockerDto
     */
    @PostMapping("/add/{lockerRegion}/{detailLockerCount}")
    public ResponseEntity<?> addLocker(@PathVariable String lockerRegion, @PathVariable int detailLockerCount) {
        return new ResponseEntity<>(lockerService.addLocker(lockerRegion, detailLockerCount), HttpStatus.OK);
    }
}
