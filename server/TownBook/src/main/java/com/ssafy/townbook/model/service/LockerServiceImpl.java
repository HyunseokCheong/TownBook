package com.ssafy.townbook.model.service;

import com.ssafy.townbook.model.dto.LockerDto;
import com.ssafy.townbook.model.dto.response.FindListResponseDto;
import com.ssafy.townbook.model.dto.response.FindOneResponseDto;
import com.ssafy.townbook.model.dto.response.SaveOneResponseDto;
import com.ssafy.townbook.model.entity.DetailLocker;
import com.ssafy.townbook.model.entity.Locker;
import com.ssafy.townbook.model.repository.DetailLockerRepository;
import com.ssafy.townbook.model.repository.LockerRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LockerServiceImpl implements LockerService {
    
    private LockerRepository       lockerRepository;
    private DetailLockerRepository detailLockerRepository;
    
    @Autowired
    public LockerServiceImpl(LockerRepository lockerRepository, DetailLockerRepository detailLockerRepository) {
        this.lockerRepository       = lockerRepository;
        this.detailLockerRepository = detailLockerRepository;
    }
    
    /**
     * 전체 보관함 및 보관함에 할당된 세부 보관함 조회
     *
     * @return List<LockerDto>
     */
    @Override
    public FindListResponseDto findAll() {
        Optional<List<Locker>> findLockers = Optional.ofNullable(lockerRepository.findAll());
        return new FindListResponseDto(findLockers.get().stream()
                .map(LockerDto::new)
                .collect(Collectors.toList()));
    }
    
    /**
     * 단일 보관함 및 보관함에 할당된 세부 보관함 조회
     *
     * @param lockerNo
     * @return LockerDto
     */
    @Override
    public FindOneResponseDto findLockerByLockerNo(Long lockerNo) {
        Locker findLocker = lockerRepository.findLockerByLockerNo(lockerNo).get();
        return new FindOneResponseDto(new LockerDto(findLocker));
    }
    
    /**
     * 보관함 및 세부 보관함을 생성한다.
     *
     * @param lockerRegion
     * @param detailLockerCount
     * @return Boolean
     */
    @Override
    @Transactional
    public SaveOneResponseDto addLocker(String lockerRegion, int detailLockerCount, Double lockerLatitude,
            Double lockerLongitude) {
        try {
            Locker locker = new Locker();
            locker.setLockerRegion(lockerRegion);
            locker.setLockerLatitude(lockerLatitude);
            locker.setLockerLongitude(lockerLongitude);
            lockerRepository.save(locker);
            while (detailLockerCount-- > 0) {
                DetailLocker detailLocker = new DetailLocker();
                locker.addDetailLocker(detailLocker);
                detailLockerRepository.save(detailLocker);
            }
            return new SaveOneResponseDto(true);
        } catch (Exception e) {
            return new SaveOneResponseDto(e.getMessage());
        }
    }
}
